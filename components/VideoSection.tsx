import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lite-video-player': any;
    }
  }
}

const VideoSection: React.FC = () => {
  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Veja o Agendify em Ação</h2>
          <p className="text-slate-600">Conheça a interface intuitiva que vai transformar a gestão do seu negócio.</p>
        </div>
        
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-black border-4 border-slate-900">
             <lite-video-player 
                video-id="8409439e-bca0-4367-985e-ca15741982f3" 
                aspect-ratio="16:9" 
                base-url="https://app.litevideo.net" 
                params="aspectRatio=16%3A9&coverColor=%230f172a&progressSpeed=normal&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=huge&showTitle=true&showControls=true&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=100&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=false&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false"
             >
             </lite-video-player>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;