function ServiceCard({ tier, image, title, description }) {
  return (
    <div className="bg-gray-50 px-6 pt-16 pb-10 rounded-3xl transition-all duration-300 hover:shadow-md relative border border-gray-200 w-[23em] max-w-md mx-auto ">
      {/* Tier Label */}
      <div className="absolute top-6 right-6 text-3xl font-bold text-gray-200 select-none">
        TIER {tier}
      </div>

      {/* Circle Image */}
      <div className="absolute -top-16 left-1/4 transform -translate-x-1/2 w-30 h-30 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Content */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-3">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
