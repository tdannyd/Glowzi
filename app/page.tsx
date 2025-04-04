import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-[#f5eee3]">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        <div className="absolute inset-0 bg-[#a89683]/30 z-10"></div>
        <Image src="/hero-image.jpg" alt="Glowzi beauty treatment" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto h-full flex items-center justify-center">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif text-white max-w-3xl px-4">
            Glowzi specializing in efficient personalized and rejuvenating treatments
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">What we do at Glowzi?</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            At Glowzi, we believe in a holistic approach to skincare. Our treatments are designed to nourish,
            rejuvenate, and transform your skin using cutting-edge techniques and premium formulations. Each service is
            tailored to your unique skin needs, ensuring optimal results and a luxurious experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-6 overflow-hidden">
              <Image src="/service-1.jpg" alt="Facials" fill className="object-cover" />
            </div>
            <p className="text-sm text-gray-600 mb-2">#1</p>
            <h2 className="text-2xl font-serif uppercase tracking-wider">FACIALS</h2>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-6 overflow-hidden">
              <Image src="/service-2.jpg" alt="Advanced Skincare" fill className="object-cover" />
            </div>
            <p className="text-sm text-gray-600 mb-2">#2</p>
            <h2 className="text-2xl font-serif uppercase tracking-wider">ADVANCED SKINCARE</h2>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-6 overflow-hidden">
              <Image src="/service-3.jpg" alt="Cutting-Edge Formulations" fill className="object-cover" />
            </div>
            <p className="text-sm text-gray-600 mb-2">#3</p>
            <h2 className="text-2xl font-serif uppercase tracking-wider">CUTTING-EDGE FORMULATIONS</h2>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-16 md:py-24 bg-[#e8e8ed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">How Efficient are Treatments at Glowzi?</h2>

            <p className="text-lg mb-10">
              Glowzi's treatment protocols are proven to be 90% more effective than market standard. Client typically want
              skin  treatments that deliver visible, lasting results with a reasonable price and fast. Our proprietary blend
              of selection products and personalized approach ensures superior results compared to standard treatments. We help
              customer save money & time by consistently suggest the right protocols based on their requirement & skin condition
              with our expertise & database.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Comparison Box 1 */}
              <div className="bg-[#4a4a4a] text-white p-8 rounded-lg">
                <p className="text-xl mb-4">Standard treatments are only</p>
                <p className="text-6xl font-bold mb-4">65%</p>
                <p className="text-sm">
                  effective when addressing complex skin concerns and providing long-lasting results
                </p>
              </div>

              {/* Comparison Box 2 */}
              <div className="bg-white p-8 rounded-lg">
                <p className="text-xl mb-4">Glowzi treatments are consistently</p>
                <p className="text-6xl font-bold mb-4">95%</p>
                <p className="text-sm">
                  effective in delivering visible improvements and maintaining results over time
                </p>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-[#4a4a4a] text-white p-8 rounded-lg">
              <div className="flex items-end justify-around h-64 mb-6">
                <div className="w-16 flex flex-col items-center">
                  <div className="bg-[#5b9bd5] w-full" style={{ height: "45%" }}></div>
                  <p className="mt-2 text-xs text-center">Generic Products</p>
                </div>
                <div className="w-16 flex flex-col items-center">
                  <div className="bg-[#ed7d31] w-full" style={{ height: "65%" }}></div>
                  <p className="mt-2 text-xs text-center">Standard Treatments</p>
                </div>
                <div className="w-16 flex flex-col items-center">
                  <div className="bg-[#e15759] w-full" style={{ height: "95%" }}></div>
                  <p className="mt-2 text-xs text-center">Glowzi Treatments</p>
                </div>
              </div>
              <div className="text-center text-sm">
                Effectiveness comparison based on clinical studies and customer satisfaction surveys
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4">Customer Reviews from Our Glowzi Community</h2>
        <p className="text-center text-xl font-serif mb-16">Real people. Real results. Real glow.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-sm flex flex-col items-center">
            <a
              href="https://instagram.com/glowwithsara"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 mb-4 cursor-pointer transition-transform hover:scale-105"
              aria-label="Visit Instagram profile"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/avatar-1.jpg"
                    alt="Customer avatar"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </a>
            <div className="flex text-yellow-400 mb-3">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-center">Glowzi's facials changed my skin game! Every visit feels like magic ✨</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-sm flex flex-col items-center">
            <a
              href="https://instagram.com/emily_beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 mb-4 cursor-pointer transition-transform hover:scale-105"
              aria-label="Visit Instagram profile"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/avatar-2.jpg"
                    alt="Customer avatar"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </a>
            <div className="flex text-yellow-400 mb-3">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-center">
              Absolutely love the advanced skincare treatments here. My skin has never felt better!
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-sm flex flex-col items-center">
            <a
              href="https://instagram.com/the_jonathan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 mb-4 cursor-pointer transition-transform hover:scale-105"
              aria-label="Visit Instagram profile"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/avatar-3.jpg"
                    alt="Customer avatar"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </a>
            <div className="flex text-yellow-400 mb-3">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-center">The services at Glowzi are top-notch. Highly recommend to everyone!</p>
          </div>

          {/* Review 4 */}
          <div className="bg-white p-6 rounded-sm flex flex-col items-center">
            <a
              href="https://instagram.com/sarah.m"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 mb-4 cursor-pointer transition-transform hover:scale-105"
              aria-label="Visit Instagram profile"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/avatar-4.jpg"
                    alt="Customer avatar"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </a>
            <div className="flex text-yellow-400 mb-3">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-center">So impressed with the professional and caring staff at Glowzi. Will be back!</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
              <Image src="/bottom-image.jpg" alt="Glowzi beauty model" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-center md:text-left max-w-md">
                Glowzi specializing in personalized and rejuvenating treatments
              </h2>
              <Link
                href="#"
                className="border border-[#a89683] hover:bg-[#a89683] hover:text-white transition-colors duration-300 px-10 py-3 text-lg font-serif"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

