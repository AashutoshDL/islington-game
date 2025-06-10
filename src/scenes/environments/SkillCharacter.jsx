import React, { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const SkillCharacter = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/environment_models/Skill_Char.glb');
  const { actions } = useAnimations(animations, group);
  
  const currentAction = useRef(null);

  // Debug: Log available animations
  useEffect(() => {
    if (animations && animations.length > 0) {
      console.log('Available animations:', animations.map(anim => anim.name));
      console.log('Available actions:', Object.keys(actions || {}));
    }
  }, [animations, actions]);

  useImperativeHandle(ref, () => ({
    object: group.current,
    playAnimation: (name) => {
      console.log('Attempting to play animation:', name);
      
      if (!actions) {
        console.warn('No actions available');
        return;
      }
      
      if (!actions[name]) {
        console.warn(`Animation "${name}" not found. Available animations:`, Object.keys(actions));
        return;
      }

      // Stop current animation
      if (currentAction.current && actions[currentAction.current]) {
        actions[currentAction.current].fadeOut(0.2);
      }

      // Play new animation
      const action = actions[name];
      if (action) {
        action.reset().fadeIn(0.2).play();
        currentAction.current = name;
        console.log(`Playing animation: ${name}`);
      }
    },
  }));

  // Start with idle animation if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Try common idle animation names
      const idleNames = [
        'Armature|mixamo.com|Layer0',
        Object.keys(actions)[0] // fallback to first animation
      ];
      
      for (const name of idleNames) {
        if (actions[name]) {
          console.log('Starting with idle animation:', name);
          actions[name].play();
          currentAction.current = name;
          break;
        }
      }
    }
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="polySurface107">
            <skinnedMesh
              name="Mesh003"
              geometry={nodes.Mesh003.geometry}
              material={materials['lambert2.001']}
              skeleton={nodes.Mesh003.skeleton}
            />
            <skinnedMesh
              name="Mesh003_1"
              geometry={nodes.Mesh003_1.geometry}
              material={materials.texture}
              skeleton={nodes.Mesh003_1.skeleton}
            />
            <skinnedMesh
              name="Mesh003_2"
              geometry={nodes.Mesh003_2.geometry}
              material={materials['body.001']}
              skeleton={nodes.Mesh003_2.skeleton}
            />
            <skinnedMesh
              name="Mesh003_3"
              geometry={nodes.Mesh003_3.geometry}
              material={materials['hair.001']}
              skeleton={nodes.Mesh003_3.skeleton}
            />
            <skinnedMesh
              name="Mesh003_4"
              geometry={nodes.Mesh003_4.geometry}
              material={materials['lambert5.001']}
              skeleton={nodes.Mesh003_4.skeleton}
            />
            <skinnedMesh
              name="Mesh003_5"
              geometry={nodes.Mesh003_5.geometry}
              material={materials['lambert7.001']}
              skeleton={nodes.Mesh003_5.skeleton}
            />
            <skinnedMesh
              name="Mesh003_6"
              geometry={nodes.Mesh003_6.geometry}
              material={materials['lambert8.001']}
              skeleton={nodes.Mesh003_6.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload('/models/environment_models/Skill_Char.glb');

export default SkillCharacter;