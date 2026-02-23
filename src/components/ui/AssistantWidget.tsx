import Spline from '@splinetool/react-spline';

const AssistantWidget = () => {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[4000] w-32 h-32 md:w-56 md:h-56 pointer-events-auto transition-transform hover:scale-105 duration-300 drop-shadow-2xl">
            <Spline scene="https://prod.spline.design/ObUlVgj70g2y4bbx5vBKSfxN/scene.splinecode" />
        </div>
    );
};

export default AssistantWidget;
