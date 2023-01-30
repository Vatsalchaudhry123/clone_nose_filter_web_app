nosex=0
nosey=0
function setup()
{
    Canvas=createCanvas(300,300)
    Canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes)
}
function take_snapshot()
{
    save('myfilter.png')
}
function modelloaded()
{
    console.log("posenet is inisilise")
}
function draw()
{
    image(video,0,0,300,300)
    image(clown_nose,nosex,nosey,30,30)
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results)
        nosex=results[0].pose.nose.x-15
        nosey=results[0].pose.nose.y-15
    }
    }
    function preload()
    {
        clown_nose=loadImage("https://i.postimg.cc/7hThby7q/clown.jpg")
    }
