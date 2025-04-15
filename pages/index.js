import Head from "next/head";

export default function Home() {
  const services = [
    {
      title: "Tư vấn và triển khai hệ thống",
      description: "Thiết kế và triển khai hạ tầng IT chuyên nghiệp cho doanh nghiệp."
    },
    {
      title: "Thiết bị và linh kiện",
      description: "Cung cấp máy chủ, thiết bị mạng, và linh kiện chất lượng cao."
    },
    {
      title: "Bảo trì và hỗ trợ kỹ thuật",
      description: "Dịch vụ bảo trì định kỳ, xử lý sự cố và hỗ trợ nhanh chóng."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Phúc An Solutions - Demo</title>
        <meta name="description" content="Demo website giống Phúc An Solutions" />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-700">Phúc An Demo</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-700">Giới thiệu</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Dịch vụ</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Dự án</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Giải pháp Công nghệ cho Doanh nghiệp</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cung cấp thiết bị, triển khai hệ thống, và dịch vụ IT toàn diện – cùng doanh nghiệp phát triển bền vững.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-12 text-blue-700">Dịch vụ của chúng tôi</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg bg-white">
                <h4 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Phúc An Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
