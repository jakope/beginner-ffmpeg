import ffmpegCommander from './ffmpeg-command-builder-node.js';
import path from 'path';
const inputVideo = process.argv[2];
const __dirname = path.parse(inputVideo).dir;

console.log("inputVideo",inputVideo,__dirname);

// ffmpegCommander.create("FULLHD").addVideoInput(inputVideo).scale().outputTo(inputVideo.replace(".mp4","_h264.mp4")).run();

const commander = ffmpegCommander.create("FULLHD").addVideoInput(inputVideo).stats().then((stats)=>{
    console.log("then",stats);
    ffmpegCommander.create("FULLHD").addVideoInput(inputVideo).createThumbnail().outputTo(inputVideo.replace(".mp4",".png")).logCommand().run();
});

// ffmpegCommander.initialize({ folder : __dirname, autoFindHwaccel : true}).then(()=>{
//     ffmpegCommander.create("FULLHD").addVideoInput(inputVideo).scale().outputTo(inputVideo.replace(".mp4","_hwaccel.mp4")).run();
// })