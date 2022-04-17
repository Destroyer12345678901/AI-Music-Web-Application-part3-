iphonealarm= "";
iphone6 = ""; 
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
r2ightWristY = 0;
function preload(){
 //iPhone_alarm = loadSound('iPhoneAlarm.mp3');
 //iPhone_6 = loadSound('DefaultRingtone.mp3');
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function draw(){
        image(video, 0, 0, 500, 500);
}
function gotPoses(error, results){
    if(results.length > 0){
        console.log(results);
         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = " + leftWrist_x+" leftWrist_y = " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " + rightWrist_x + " rightWrist_y = " + rightWrist_y);
}
}