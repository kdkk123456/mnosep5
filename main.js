nosex=0
nosey=0
function preload() {

}
function setup() {
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function cap() {
    save("CI.png")
}
 function draw() {
     image(video,0,0,400,400)
 }
function modelloaded(){
    console.log("hi")
}
function gotposes(result) {
    if(result.length>0){
        console.log(result)
        nosex=result[0].pose.nose.x
        nosey=result[0].pose.nose.y
        console.log(nosex,nosey)
    }
}