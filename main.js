const THREE = window.MINDAR.IMAGE.THREE;


document.addEventListener('DOMContentLoaded', () => {

const myStart = async () => {
	const video = document.createElement("video");
	video.setAttribute("src", "../assets/video/sjc.mp4")
	video.setAttribute("loop", "");

	video.oncanplay = () => {
		video.play();
		resolve(video.captureStream());
	}

	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
		container: document.body,
		imageTargetSrc: '../assets/target/sjc.mind',
	});

	const {renderer, scene, camera} = mindarThree;

	const myGeometry = new THREE.PlaneGeometry(1, 1);
	const videoTexture = new THREE.VideoTexture(video);
	const myMaterial = new THREE.MeshBasicMaterial({map: videoTexture, side: THREE.FrontSide, toneMapped: false });
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