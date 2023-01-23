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
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results)
        console.log("nosex"+results[0].pose.nose.x)
        console.log("nosey"+results[0].pose.nose.y)
    }
    }