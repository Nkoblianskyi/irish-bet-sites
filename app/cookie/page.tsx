import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This Cookie Policy explains how IE Best Betting Sites ("we", "us", or "our") uses cookies and similar
                technologies to recognize you when you visit our website. It explains what these technologies are and
                why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners in order to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-600 mb-6">
                Cookies set by the website owner (in this case, IE Best Betting Sites) are called "first-party cookies".
                Cookies set by parties other than the website owner are called "third-party cookies". Third-party
                cookies enable third-party features or functionality to be provided on or through the website (e.g.,
                advertising, interactive content, and analytics). The parties that set these third-party cookies can
                recognize your computer both when it visits the website in question and also when it visits certain
                other websites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why do we use cookies?</h2>
              <p className="text-gray-600 mb-6">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical
                reasons in order for our website to operate, and we refer to these as "essential" or "strictly
                necessary" cookies. Other cookies also enable us to track and target the interests of our users to
                enhance the experience on our website. Third parties serve cookies through our website for advertising,
                analytics, and other purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of cookies we use</h2>
              <p className="text-gray-600 mb-2">The specific types of cookies served through our website include:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li className="mb-2">
                  <strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services
                  available through our website and to use some of its features, such as access to secure areas.
                </li>
                <li className="mb-2">
                  <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the
                  performance and functionality of our website but are non-essential to their use. However, without
                  these cookies, certain functionality may become unavailable.
                </li>
                <li className="mb-2">
                  <strong>Analytics and customization cookies:</strong> These cookies collect information that is used
                  either in aggregate form to help us understand how our website is being used or how effective our
                  marketing campaigns are, or to help us customize our website for you.
                </li>
                <li className="mb-2">
                  <strong>Advertising cookies:</strong> These cookies are used to make advertising messages more
                  relevant to you. They perform functions like preventing the same ad from continuously reappearing,
                  ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements
                  that are based on your interests.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How can you control cookies?</h2>
              <p className="text-gray-600 mb-6">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p className="text-gray-600 mb-6">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                cookies, you may still use our website though your access to some functionality and areas of our website
                may be restricted. As the means by which you can refuse cookies through your web browser controls vary
                from browser to browser, you should visit your browser's help menu for more information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                How often will we update this Cookie Policy?
              </h2>
              <p className="text-gray-600 mb-6">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="text-gray-600 mb-6">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where can you get further information?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies or other technologies, please email us or use the
                contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
