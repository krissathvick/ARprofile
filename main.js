const THREE = window.MINDAR.IMAGE.THREE;


document.addEventListener('DOMContentLoaded', () => {

const myStart = async () => {
	
	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
		container: document.body,
		imageTargetSrc: './assets/target/sjc.mind',
	});

	const {renderer, scene, camera} = mindarThree;

	const myGeometry = new THREE.PlaneGeometry(1, 1);
	const myMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff, transparent: true, opacity: 0.5});
	const myPlane = new THREE.Mesh(myGeometry, myMaterial);

	const anchor = mindarThree.addAnchor(0);
	anchor.group.add(myPlane); // THREE GROUP EMPTY OBJECT ATTACHED TO A geometry

	await mindarThree.start();

	renderer.setAnimationLoop(() => {
		renderer.render(scene, camera);
	});
}
myStart();

});