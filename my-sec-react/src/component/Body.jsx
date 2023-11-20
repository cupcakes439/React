import "../css/Kuda.css"
import card1 from "../assets/Images/card1.jpg"
import card2 from "../assets/Images/card2.jpg"
import card3 from "../assets/Images/card3.jpg"
import card4 from "../assets/Images/card4.jpg"
import tech from "../assets/Images/techcrunch1.svg"
import wef from "../assets/Images/wef.svg"
import fintech from "../assets/Images/fintech.svg"
import bbc from "../assets/Images/bbc.svg"
import cnbc from "../assets/Images/cnbc.svg"
import euro from "../assets/Images/Euromoney.svg"
import valar from "../assets/Images/valar.svg"
import enc from "../assets/Images/enc.svg"
import sbi from "../assets/Images/sbi.svg"
import target from "../assets/Images/target.svg"
import visa from "../assets/Images/visa.svg"

const Main = ()=> {
    return (
        <>
            <main className="main1">
                <div className="firstdiv ">
                    <h2 className="one">The money app for Africans.</h2>
                    <p id="two">Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                </div>
            </main>
            <main className="main2">
            </main>
            <main className="main3">
            </main>
            <main className="main4">
                <div className="div2">
                    <h1 className="">Your phone + <br/>our app + <br/> a debit card = <br/> a simpler life.</h1>
                    <p className="p3">We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                    <a className="a" href="">Open An Account in Minutes</a>
                </div>
            </main>
            <main className="main5">
                <div className="div3">
                    <h1>It’s your money, we <br/> just help you <br/> manage it.</h1>
                    <p className="p3">Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                </div>
            </main>
            <main className="main6">
                <div className="div4">
                    <h1>Save money as you <br/> spend it, seriously.</h1>
                    <p className="p3">You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                    <a className="a" href="">See all our Savings</a>
                </div>
            </main>
            <main className="main7">
                <div className="div5">
                    <h1>Turn off access, <br/> turn on safety.</h1>
                    <p className="p3">Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
                    <a className="a" href="#">Learn more about Cards</a>
                </div>
            </main>
            <main className="main8">
                <div className="div6">
                    <h1>We’re always <br/> happy to help you.</h1>
                    <p className="p3">You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                    <a className="a" href="#">Get Help</a>
                </div>
            </main>
            <main className="main9">
                <div className="div7">
                    <h1>Fees as clear as <br/> glass.</h1>
                    <p className="p3">We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                    <a className="a" href="#">See all our fees</a>
                </div>
            </main>
            <h1 className="h1">Don’t just take our word for it</h1>
            <main className="main10">
                <div className="diva">
                    <div className="div8">
                        <p>
                            Well done to the guys at <b>@kudabank</b> had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah
                        </p>
                    </div>
                    <div className="div9">
                        <img className="img1" src={card1} alt=""/>
                        <span>Mu'azu Muhammad Kudu</span>
                    </div>
                </div>
                <div className="diva">
                    <div className="div8">
                            <p id="got">Just joined the best Digital Bank in Nigeria</p>
                            <p>I have no complaints whatsoever since i started using Kuda</p>
                    </div>
                    <div className="div9">
                        <div className="div10">T</div>
                        <span>Tomisinv</span>
                    </div>
                </div>
                <div className="diva">
                    <div className="div8">
                        <p>Never thought an app would stylish become my everyday way to bank and have access to physical cash. <b>@kudabank</b> is sleek</p>
                    </div>
                    <div className="div9">
                        <img className="img1" src={card2} alt=""/>
                        <span>Babajide Duroshola</span>
                    </div>
                </div>
                <div className="diva">
                    <div className="div8">
                            <p>
                            This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!
                            </p>
                    </div>
                    <div className="div9">
                        <img className="img1" src={card3} alt=""/>
                        <span>@RealSOK_</span>
                    </div>
                </div>
                <div className="diva">
                    <div className="div8">
                        <p>
                            I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!
                        </p>
                    </div>
                    <div className="div9">
                        <img className="img1" src={card4} alt=""/>
                        <span>Adebambo Oyekan</span>
                    </div>
                </div>
                <div className="diva">
                    <div className="div8">
                        <p>
                            I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.
                        </p>
                    </div>
                    <div className="div9">
                        <div className="div10">I</div>
                        <span>Ifeanyichukwu Obaji</span>
                    </div>
                </div>
            </main>
            <main className="main11">
                <div className="div11">
                    <img className="ant" width="80px" height="40px" src={tech} alt=""/>
                    <img className="ant" width="102px" height="63px" src={wef} alt=""/>
                    <img className="ant" width="103px" height="40px" src={fintech} alt=""/>
                    <img className="ant" width="140.34px" height="40px" src={bbc} alt=""/>
                    <img className="ant" width="69.01px" height="64.01px" src={cnbc} alt=""/>
                    <img className="ant" width="157px" height="37.19px" src={euro} alt=""/>
                </div>
            </main>
            <main className="main12">
                <h1 className="head1">Our Partners</h1>
                <div className="div12">
                    <img className="ant" width="110px" height="32px" src={valar} alt=""/>
                    <img className="ant" width="179px" height="34px" src={enc} alt=""/>
                    <img className="ant" width="128px" height="34px" src={sbi} alt=""/>
                    <img className="ant" width="99px" height="34px" src={target} alt=""/>
                    <img className="ant" width="92px" height="29px" src={visa} alt=""/>
                </div>
            </main>
            <h1 className="head2">Choose the freedom you need.</h1>
            <main className="main13">
                <div className="div13">
                    <div className="div14">
                        <div className="div25"></div>
                        <div className="div25">
                            <h2 className="h2">Other Banks</h2>
                        </div>
                </div>
                    <div className="div15">
                        <div className="div25">
                            <span className="span3">Transfer Fee</span>
                        </div>
                        <div className="div25 div26">
                            <span>Up to ₦50 plus V.A.T.</span>
                        </div>
                        <div className="div25 div26">
                            <span>25 free transfers every month</span>
                        </div>
                    </div>
                    <div className="div16">
                        <div className="div25">
                            <span className="span3">Debit Card</span>
                        </div>
                        <div className="div25 div26">
                            <span>₦1,000 plus V.A.T</span>
                        </div>
                        <div className="div25 div26">
                            <span>Free</span>
                        </div>
                    </div>
                    <div className="div17">
                        <div className="div25">
                            <span className="span3">Card Delivery</span>
                        </div>
                        <div className="div25 div26">
                            <span>Yes</span>
                        </div> 
                    </div>
                    <div className="div18">
                        <div className="div25">
                            <span className="span3">Card Maintenance Fee</span>
                        </div>
                        <div className="div25 div26">
                            <span>Up to ₦50 per quarter</span>
                        </div>
                        <div className="div25 div26">
                            <span>No</span>
                        </div>
                    </div>
                    <div className="div19">
                        <div className="div25">
                            <span className="span3">Alerts</span>
                        </div>
                        <div className="div25 div26">
                            <span>Charge for SMS alerts</span>
                        </div>
                        <div className="div25 div26">
                            <span>Free instant notifications</span>
                        </div>
                    </div>
                    <div className="div20">
                        <div className="div25">
                            <span className="span3">Annual Interest</span>
                        </div>
                        <div className="div25 div26">
                            <span>4%</span>
                        </div>
                        <div className="div25 div26">
                            <span>Up to 15%</span>
                        </div>
                    </div>
                    <div className="div21">
                        <div className="div25">
                            <span className="span3">Bill Payment Fee</span>
                        </div>
                        <div className="div25 div26">
                            <span>Up to ₦100 per bill</span>
                        </div>
                        <div className="div25 div26">
                            <span>No</span>
                        </div>
                    </div>
                    <div className="div22">
                        <div className="div25">
                            <span className="span3">Instant Reversals</span>
                        </div>
                        <div className="div25 div26"></div>
                        <div className="div25 div26">
                            <span>Yes</span>
                        </div>
                    </div>
                    <div className="div23">
                        <div className="div25">
                            <span className="span3">Maintenance</span>
                        </div>
                        <div className="div25 div26">
                            <span>Yes</span>
                        </div>
                        <div className="div25 div26">
                            <span>No</span>
                        </div>
                    </div>
                </div>
            </main>
            <main className="main14">
                <div className="div24">
                    <h2 className="h5">The money app for Africans.</h2>
                    <p className="para1">Save, spend, send and invest money across borders.</p>
                    <button id="button1">Join Kuda</button>
                </div>
            </main>
        </>
    )
}

export default Main