"use client"

export function SafeGambling() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Responsible Gambling</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We promote safe and responsible gambling. Your wellbeing is our priority.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Gambling Should Be Fun */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Gambling Should Be Fun</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Betting should always be an enjoyable form of entertainment, not a way to make money or solve financial
              problems. If gambling stops being fun or becomes stressful, it may be time to take a break or seek help.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Remember that the house always has an edge, and losses are part of the game. Never bet more than you can
              afford to lose, and always view any money you wager as the cost of entertainment.
            </p>
          </div>

          {/* Set Limits */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Set Your Limits</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before you start betting, decide how much money and time you can afford to spend. Stick to these limits
              regardless of whether you're winning or losing. Most reputable Irish betting sites offer tools to help you
              set:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>
                • <strong>Deposit limits:</strong> Control how much you can deposit daily, weekly, or monthly
              </li>
              <li>
                • <strong>Loss limits:</strong> Set maximum amounts you're willing to lose in a given period
              </li>
              <li>
                • <strong>Time limits:</strong> Restrict how long you spend on betting sites
              </li>
              <li>
                • <strong>Bet limits:</strong> Cap the size of individual bets you can place
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              These tools are designed to help you maintain control and ensure gambling remains a fun activity rather
              than a problem.
            </p>
          </div>

          {/* Warning Signs */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Warning Signs to Watch For</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              It's important to recognize when gambling might be becoming a problem. Be aware of these warning signs:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <ul className="text-gray-300 space-y-2">
                <li>• Spending more money than planned</li>
                <li>• Chasing losses with bigger bets</li>
                <li>• Lying about gambling activities</li>
                <li>• Neglecting work, family, or social activities</li>
                <li>• Borrowing money to gamble</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li>• Feeling anxious when not gambling</li>
                <li>• Using gambling to escape problems</li>
                <li>• Inability to stop despite wanting to</li>
                <li>• Mood swings related to wins/losses</li>
                <li>• Gambling with money needed for essentials</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              If you recognize any of these signs in yourself or someone you know, it's important to seek help
              immediately.
            </p>
          </div>

          {/* Self-Exclusion */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Self-Exclusion Options</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you feel you need a break from gambling, self-exclusion tools can help. These allow you to:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>
                • <strong>Temporary exclusion:</strong> Block access for a set period (24 hours to 6 months)
              </li>
              <li>
                • <strong>Permanent exclusion:</strong> Permanently close your account with no option to reopen
              </li>
              <li>
                • <strong>Multi-operator exclusion:</strong> Block access across multiple betting sites simultaneously
              </li>
              <li>
                • <strong>National exclusion:</strong> Use services that block access to all licensed operators in
                Ireland
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              During exclusion periods, you won't be able to access your account, receive promotional materials, or
              place bets. This cooling-off period can help you regain control and perspective.
            </p>
          </div>

          {/* Getting Help */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Getting Help and Support</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you're struggling with gambling, remember that help is available. Professional support services offer:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Free, confidential counseling and support</li>
              <li>• Online chat services and helplines</li>
              <li>• Face-to-face counseling sessions</li>
              <li>• Support groups and peer networks</li>
              <li>• Financial advice and debt management</li>
              <li>• Family support services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              Organizations like GambleAware, GamCare, and Gambling Therapy provide comprehensive support for problem
              gambling. In Ireland, you can also contact Gamblers Anonymous Ireland for local support groups and
              meetings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Remember, seeking help is a sign of strength, not weakness. The sooner you reach out, the easier it is to
              regain control and get back to enjoying life without the stress of problem gambling.
            </p>
          </div>

          {/* For Friends and Family */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Support for Friends and Family</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Problem gambling doesn't just affect the individual - it impacts families and friends too. If someone you
              care about has a gambling problem:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Don't judge or blame them for their addiction</li>
              <li>• Encourage them to seek professional help</li>
              <li>• Don't lend them money or pay their gambling debts</li>
              <li>• Take care of your own mental health and wellbeing</li>
              <li>• Consider attending support groups for families affected by gambling</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Support services also offer guidance and counseling for family members and friends affected by someone
              else's gambling problem.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block font-semibold mb-4">
            18+ | Gambling can be addictive — Play safe
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This site is intended for users aged 18 and over. If you're concerned about your gambling or that of someone
            you know, please contact a gambling support organization for help and advice.
          </p>
        </div>
      </div>
    </section>
  )
}
