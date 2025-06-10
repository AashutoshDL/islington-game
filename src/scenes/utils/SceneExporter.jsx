// // SceneExporter.js - Fixed version with GLTF validation compliance
// import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
// import * as THREE from 'three';

// export class SceneExporter {
//   constructor() {
//     this.exporter = new GLTFExporter();
//   }

//   // Export with custom options
//   async exportScene(scene, options = {}) {
//     const defaultOptions = {
//       binary: true,
//       onlyVisible: true,
//       truncateDrawRange: true,
//       embedImages: true,
//       maxTextureSize: 2048,
//       includeCustomExtensions: false,
//       animations: false,
//       // Exclude specific object types
//       excludeTypes: ['Camera', 'Light', 'Helper', 'LOD', 'Bone', 'SkinnedMesh'],
//       fileName: 'exported_scene.glb',
//       // Enhanced GLTF validation options
//       forceIndices: true,
//       forcePowerOfTwoTextures: true,
//       validateMatrices: true,
//       ensureConsistentAttributes: true
//     };

//     const finalOptions = { ...defaultOptions, ...options };
    
//     return new Promise((resolve, reject) => {
//       try {
//         // Clone and prepare scene to avoid modifying original
//         const sceneToExport = this.prepareSceneForExport(scene, finalOptions);
        
//         this.exporter.parse(
//           sceneToExport,
//           (gltf) => {
//             console.log('Export completed successfully');
//             this.downloadFile(gltf, finalOptions.fileName);
//             resolve(gltf);
//           },
//           (error) => {
//             console.error('Export error:', error);
//             reject(error);
//           },
//           {
//             binary: finalOptions.binary,
//             onlyVisible: finalOptions.onlyVisible,
//             truncateDrawRange: finalOptions.truncateDrawRange,
//             embedImages: finalOptions.embedImages,
//             maxTextureSize: finalOptions.maxTextureSize,
//             includeCustomExtensions: finalOptions.includeCustomExtensions,
//             animations: finalOptions.animations,
//             forceIndices: finalOptions.forceIndices,
//             forcePowerOfTwoTextures: finalOptions.forcePowerOfTwoTextures
//           }
//         );
//       } catch (error) {
//         console.error('Scene preparation error:', error);
//         reject(error);
//       }
//     });
//   }

//   prepareSceneForExport(scene, options) {
//     // Create a new scene instead of cloning
//     const exportScene = new THREE.Scene();
    
//     // Copy basic scene properties
//     if (scene.background) exportScene.background = scene.background;
//     if (scene.environment) exportScene.environment = scene.environment;
//     if (scene.fog) exportScene.fog = scene.fog;
    
//     // Collect all valid meshes first
//     const validMeshes = [];
//     scene.traverse((child) => {
//       if (this.isValidMeshForExport(child) && !this.shouldExcludeObject(child, options.excludeTypes)) {
//         validMeshes.push(child);
//       }
//     });

//     console.log(`Found ${validMeshes.length} valid meshes for export`);

//     // Process each mesh
//     validMeshes.forEach((mesh, index) => {
//       try {
//         const processedMesh = this.processMeshForExport(mesh, options);
//         if (processedMesh) {
//           exportScene.add(processedMesh);
//         }
//       } catch (error) {
//         console.warn(`Failed to process mesh ${index}:`, mesh.name || 'unnamed', error);
//       }
//     });

//     console.log(`Successfully processed ${exportScene.children.length} meshes`);

//     return exportScene;
//   }

//   isValidMeshForExport(obj) {
//     if (!obj.isMesh) return false;
//     if (!obj.geometry) return false;
//     if (!obj.material) return false;
//     if (!obj.visible) return false;
    
//     // Skip skinned meshes as they cause validation issues
//     if (obj.isSkinnedMesh) return false;
    
//     // Check if geometry has valid attributes
//     const geometry = obj.geometry;
//     if (!geometry.attributes.position) return false;
//     if (geometry.attributes.position.count === 0) return false;
    
//     return true;
//   }

//   processMeshForExport(originalMesh, options) {
//     // Clone geometry and fix common issues
//     const geometry = this.processGeometry(originalMesh.geometry);
    
//     // Process material
//     const material = this.processMaterial(originalMesh.material, options);
    
//     // Create new mesh
//     const mesh = new THREE.Mesh(geometry, material);
    
//     // FIX: Ensure clean matrix decomposition
//     this.setCleanTransform(mesh, originalMesh, options);
    
//     // Copy properties
//     mesh.name = originalMesh.name || `mesh_${Date.now()}`;
//     mesh.castShadow = false;
//     mesh.receiveShadow = false;
//     mesh.visible = true;
//     mesh.userData = {};
    
//     // Remove any skinning-related properties
//     delete mesh.skeleton;
//     delete mesh.bindMatrix;
//     delete mesh.bindMatrixInverse;
    
//     return mesh;
//   }

//   // FIX: Clean transform setting to avoid matrix decomposition issues
//   setCleanTransform(mesh, originalMesh, options) {
//     if (options.validateMatrices) {
//       // Reset to identity first
//       mesh.position.set(0, 0, 0);
//       mesh.rotation.set(0, 0, 0);
//       mesh.scale.set(1, 1, 1);
//       mesh.updateMatrix();
      
//       // Try to copy transform safely
//       try {
//         // Decompose the original matrix
//         const position = new THREE.Vector3();
//         const quaternion = new THREE.Quaternion();
//         const scale = new THREE.Vector3();
        
//         originalMesh.updateMatrixWorld();
//         originalMesh.matrixWorld.decompose(position, quaternion, scale);
        
//         // Validate the decomposed values
//         if (this.isValidTransform(position, quaternion, scale)) {
//           mesh.position.copy(position);
//           mesh.quaternion.copy(quaternion);
//           mesh.scale.copy(scale);
//         } else {
//           console.warn('Invalid transform detected, using identity', originalMesh.name);
//         }
//       } catch (error) {
//         console.warn('Failed to decompose matrix, using identity:', error);
//       }
//     } else {
//       // Simple copy (original behavior)
//       mesh.position.copy(originalMesh.position);
//       mesh.rotation.copy(originalMesh.rotation);
//       mesh.scale.copy(originalMesh.scale);
//     }
    
//     mesh.updateMatrix();
//   }

//   // FIX: Validate transform values
//   isValidTransform(position, quaternion, scale) {
//     // Check for NaN or infinite values
//     const posValid = position.x !== undefined && isFinite(position.x) && 
//                     position.y !== undefined && isFinite(position.y) && 
//                     position.z !== undefined && isFinite(position.z);
    
//     const quatValid = quaternion.x !== undefined && isFinite(quaternion.x) && 
//                      quaternion.y !== undefined && isFinite(quaternion.y) && 
//                      quaternion.z !== undefined && isFinite(quaternion.z) && 
//                      quaternion.w !== undefined && isFinite(quaternion.w);
    
//     const scaleValid = scale.x !== undefined && isFinite(scale.x) && scale.x > 0 &&
//                       scale.y !== undefined && isFinite(scale.y) && scale.y > 0 &&
//                       scale.z !== undefined && isFinite(scale.z) && scale.z > 0;
    
//     return posValid && quatValid && scaleValid;
//   }

//   // FIX: Enhanced geometry processing for consistent attributes
//   processGeometry(originalGeometry) {
//     const geometry = originalGeometry.clone();
    
//     // Get the position attribute count as reference
//     const positionCount = geometry.attributes.position.count;
    
//     // Ensure geometry has indices for proper GLTF export
//     if (!geometry.index) {
//       console.log('Adding indices to non-indexed geometry');
//       geometry.setIndex(this.generateIndices(positionCount));
//     }
    
//     // FIX: Ensure all attributes have consistent counts
//     this.ensureConsistentAttributes(geometry, positionCount);
    
//     // Ensure geometry is properly bounded
//     if (!geometry.boundingBox) {
//       geometry.computeBoundingBox();
//     }
    
//     if (!geometry.boundingSphere) {
//       geometry.computeBoundingSphere();
//     }
    
//     return geometry;
//   }

//   // FIX: Ensure all geometry attributes have consistent vertex counts
//   ensureConsistentAttributes(geometry, targetCount) {
//     // Ensure normals match position count
//     if (!geometry.attributes.normal || geometry.attributes.normal.count !== targetCount) {
//       console.log('Regenerating normals with consistent count');
//       geometry.deleteAttribute('normal');
//       geometry.computeVertexNormals();
//     }
    
//     // Ensure UVs match position count
//     if (!geometry.attributes.uv || geometry.attributes.uv.count !== targetCount) {
//       console.log('Regenerating UVs with consistent count');
//       geometry.setAttribute('uv', this.generateConsistentUVs(targetCount));
//     }
    
//     // Remove any color attributes that might cause issues
//     if (geometry.attributes.color) {
//       if (geometry.attributes.color.count !== targetCount) {
//         console.log('Removing inconsistent color attribute');
//         geometry.deleteAttribute('color');
//       }
//     }
    
//     // Remove tangent attributes as they often cause issues
//     if (geometry.attributes.tangent) {
//       console.log('Removing tangent attribute to avoid issues');
//       geometry.deleteAttribute('tangent');
//     }
//   }

//   generateIndices(vertexCount) {
//     const indices = [];
//     for (let i = 0; i < vertexCount; i += 3) {
//       if (i + 2 < vertexCount) {
//         indices.push(i, i + 1, i + 2);
//       }
//     }
//     return new THREE.BufferAttribute(new Uint16Array(indices), 1);
//   }

//   // FIX: Generate UVs with exact vertex count match
//   generateConsistentUVs(vertexCount) {
//     const uvs = new Float32Array(vertexCount * 2);
//     for (let i = 0; i < vertexCount; i++) {
//       // Generate simple planar UVs
//       uvs[i * 2] = (i % 2); // u coordinate
//       uvs[i * 2 + 1] = Math.floor(i / 2) % 2; // v coordinate
//     }
//     return new THREE.BufferAttribute(uvs, 2);
//   }

//   // FIX: Enhanced material processing to avoid unused object warnings
//   processMaterial(originalMaterial, options) {
//     // Create a simple, GLTF-compatible material
//     const material = new THREE.MeshStandardMaterial();
    
//     // Copy basic properties
//     if (originalMaterial.color) {
//       material.color.copy(originalMaterial.color);
//     }
    
//     if (originalMaterial.opacity !== undefined) {
//       material.opacity = originalMaterial.opacity;
//     }
    
//     if (originalMaterial.transparent !== undefined) {
//       material.transparent = originalMaterial.transparent;
//     }
    
//     // Handle roughness and metalness for PBR compatibility
//     material.roughness = originalMaterial.roughness !== undefined ? originalMaterial.roughness : 0.8;
//     material.metalness = originalMaterial.metalness !== undefined ? originalMaterial.metalness : 0.0;
    
//     // FIX: Only add textures that are actually used
//     if (originalMaterial.map && originalMaterial.map.isTexture) {
//       try {
//         material.map = this.processTexture(originalMaterial.map, options);
//       } catch (error) {
//         console.warn('Failed to process diffuse texture:', error);
//       }
//     }
    
//     // FIX: Add a simple normal map if none exists to avoid unused warnings
//     if (!originalMaterial.normalMap && material.map) {
//       // Create a flat normal map texture
//       material.normalMap = this.createFlatNormalMap();
//       material.normalScale = new THREE.Vector2(1, 1);
//     } else if (originalMaterial.normalMap && originalMaterial.normalMap.isTexture) {
//       try {
//         material.normalMap = this.processTexture(originalMaterial.normalMap, options);
//         material.normalScale = originalMaterial.normalScale ? 
//           originalMaterial.normalScale.clone() : new THREE.Vector2(1, 1);
//       } catch (error) {
//         console.warn('Failed to process normal texture:', error);
//       }
//     }
    
//     // Ensure material has a name
//     material.name = originalMaterial.name || `material_${Date.now()}`;
    
//     // Clean userData
//     material.userData = {};
    
//     return material;
//   }

//   // FIX: Create a flat normal map to avoid unused object warnings
//   createFlatNormalMap() {
//     const canvas = document.createElement('canvas');
//     canvas.width = 1;
//     canvas.height = 1;
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = '#8080FF'; // Flat normal (0.5, 0.5, 1.0) in RGB
//     ctx.fillRect(0, 0, 1, 1);
    
//     const texture = new THREE.CanvasTexture(canvas);
//     texture.needsUpdate = true;
//     return texture;
//   }

//   processTexture(originalTexture, options) {
//     const texture = originalTexture.clone();
    
//     // Ensure texture has proper wrapping
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
    
//     // Ensure texture has proper filtering
//     texture.magFilter = THREE.LinearFilter;
//     texture.minFilter = THREE.LinearMipmapLinearFilter;
    
//     // Force power-of-two if needed
//     if (options.forcePowerOfTwoTextures) {
//       texture.generateMipmaps = true;
//     }
    
//     return texture;
//   }

//   shouldExcludeObject(obj, excludeTypes) {
//     return excludeTypes.some(type => {
//       switch (type) {
//         case 'Camera':
//           return obj.isCamera;
//         case 'Light':
//           return obj.isLight;
//         case 'Helper':
//           return obj.type.includes('Helper') || obj.type.includes('helper');
//         case 'LOD':
//           return obj.isLOD;
//         case 'Bone':
//           return obj.isBone;
//         case 'SkinnedMesh':
//           return obj.isSkinnedMesh;
//         default:
//           return obj.type === type;
//       }
//     });
//   }

//   downloadFile(data, filename) {
//     try {
//       const blob = new Blob([data], { type: 'application/octet-stream' });
//       const url = URL.createObjectURL(blob);
      
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = filename;
//       link.style.display = 'none';
      
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       // Clean up
//       setTimeout(() => URL.revokeObjectURL(url), 100);
//     } catch (error) {
//       console.error('Download failed:', error);
//     }
//   }

//   // Export specific objects only
//   async exportObjects(objects, options = {}) {
//     const tempScene = new THREE.Scene();
//     objects.forEach(obj => {
//       if (this.isValidMeshForExport(obj)) {
//         const processed = this.processMeshForExport(obj, options);
//         if (processed) {
//           tempScene.add(processed);
//         }
//       }
//     });
//     return this.exportScene(tempScene, options);
//   }

//   // Enhanced statistics with validation info
//   getSceneStats(scene) {
//     const stats = {
//       totalObjects: 0,
//       meshes: 0,
//       validMeshes: 0,
//       skinnedMeshes: 0,
//       materials: 0,
//       textures: 0,
//       vertices: 0,
//       faces: 0,
//       validationIssues: []
//     };

//     const materials = new Set();
//     const textures = new Set();

//     scene.traverse((child) => {
//       stats.totalObjects++;
      
//       if (child.isMesh) {
//         stats.meshes++;
        
//         if (child.isSkinnedMesh) {
//           stats.skinnedMeshes++;
//           stats.validationIssues.push(`Skinned mesh detected: ${child.name || 'unnamed'}`);
//         }
        
//         if (this.isValidMeshForExport(child)) {
//           stats.validMeshes++;
          
//           try {
//             const positions = child.geometry.attributes.position;
//             if (positions) {
//               stats.vertices += positions.count;
//               if (child.geometry.index) {
//                 stats.faces += child.geometry.index.count / 3;
//               } else {
//                 stats.faces += positions.count / 3;
//               }
              
//               // Check for attribute consistency
//               const geom = child.geometry;
//               if (geom.attributes.normal && geom.attributes.normal.count !== positions.count) {
//                 stats.validationIssues.push(`Inconsistent normal count in: ${child.name || 'unnamed'}`);
//               }
//               if (geom.attributes.uv && geom.attributes.uv.count !== positions.count) {
//                 stats.validationIssues.push(`Inconsistent UV count in: ${child.name || 'unnamed'}`);
//               }
//             }
//           } catch (error) {
//             console.warn('Failed to count vertices for:', child.name);
//           }

//           if (child.material) {
//             materials.add(child.material);
            
//             // Check for textures
//             try {
//               Object.values(child.material).forEach(value => {
//                 if (value && value.isTexture) {
//                   textures.add(value);
//                 }
//               });
//             } catch (error) {
//               console.warn('Failed to analyze material textures');
//             }
//           }
//         }
//       }
//     });

//     stats.materials = materials.size;
//     stats.textures = textures.size;
//     stats.faces = Math.floor(stats.faces);

//     return stats;
//   }
// }

// // React Hook for easy usage
// import { useThree } from "@react-three/fiber";
// import { useCallback } from "react";

// export const useSceneExporter = () => {
//   const { scene } = useThree();
//   const exporter = new SceneExporter();

//   const exportScene = useCallback(async (options = {}) => {
//     try {
//       console.log('Starting scene export...');
//       const stats = exporter.getSceneStats(scene);
//       console.log('Pre-export stats:', stats);
      
//       if (stats.validationIssues.length > 0) {
//         console.warn('Potential validation issues found:', stats.validationIssues);
//       }
      
//       await exporter.exportScene(scene, options);
//       console.log('Scene exported successfully!');
//     } catch (error) {
//       console.error('Failed to export scene:', error);
//       throw error;
//     }
//   }, [scene, exporter]);

//   const getStats = useCallback(() => {
//     try {
//       return exporter.getSceneStats(scene);
//     } catch (error) {
//       console.error('Failed to get scene stats:', error);
//       return {
//         totalObjects: 0,
//         meshes: 0,
//         validMeshes: 0,
//         skinnedMeshes: 0,
//         materials: 0,
//         textures: 0,
//         vertices: 0,
//         faces: 0,
//         validationIssues: []
//       };
//     }
//   }, [scene, exporter]);

//   return {
//     exportScene,
//     getStats,
//     exporter
//   };
// };  