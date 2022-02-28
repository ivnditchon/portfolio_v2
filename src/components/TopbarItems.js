const TopbarItems = ({ Icon, title }) => {
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer group">
            <Icon className="h-6 text-gray-300 mb-1 group-hover:animate-bounce group-hover:text-white" />
            <p className="text-gray-300 text-sm font-medium uppercase tracking-widest antialiased opacity-0 group-hover:opacity-100 group-hover:text-white transition duration-500">{title}</p>
        </div>
    );
}

export default TopbarItems;