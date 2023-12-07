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
import appStore from "../assets/Images/app store.svg"
import googleStore from "../assets/Images/google store.svg"
import ring from "../assets/Images/ring.png"
import cbn from "../assets/Images/cbn.png"
import ndic from "../assets/Images/ndic.png"
import part1 from "../assets/Images/part1.png"
import part2 from "../assets/Images/part2.png"
import part3 from "../assets/Images/part3.png"
import part4 from "../assets/Images/part4.png"
import part5 from "../assets/Images/part5.png"
import part6 from "../assets/Images/part6.png"
import part7 from "../assets/Images/part7.png"
import emoji from "../assets/Images/emoji.png"
import emoji1 from "../assets/Images/emoji1.png"

const Main = ()=> {
    const h1 = "Your phone + our app + a debit card = a simpler life.".split(" ")
    const h2 = "It’s your money, we just help you manage it.".split(" ")

    return (
        <>
            <main className="main1">
                <div className="firstdiv ">
                    <h2 className="one">The money app for Africans.</h2>
                    <p id="two">Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <div className="seconddiv">
                        <img src={appStore} alt="" />
                        <img src={googleStore} alt="" srcset="" />
                    </div>
                    <div className="thirddiv">
                        <img src={cbn} alt="" />
                        <img src={ndic} alt="" />
                    </div>
                </div>
                <div className="got">
                    <img src={ring} alt="" />
                </div>
            </main>
            <main className="main2">
            <div className="div1">
                <svg width="33" height="34" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><rect x="9.99951" y="12.8003" width="17" height="12" rx="1.5" fill="#40196D" stroke="#DFE3FF"></rect><path d="M26.5 15H10.5V17H26.5V15Z" fill="white"></path></svg>
               <p className="p1">Order a Kuda Visa card on the app with pickup and delivery options.</p> 
            </div>
            <div className="div1">
                <svg width="33" height="34" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><g clip-path="url(#clip0_NEW_ICON)"><path d="M17.9643 11.0671C17.9643 11.3856 17.9643 11.6537 17.9643 11.9386C17.9643 14.1509 17.9643 16.38 17.9643 18.5923C17.9643 18.9107 18.0647 19.0951 18.3493 19.2459C20.2913 20.4023 22.2165 21.5755 24.1418 22.7487C24.2589 22.8157 24.3761 22.8995 24.4766 22.9666C22.6183 25.5811 18.8851 26.8549 15.4699 25.38C12.1886 23.9554 10.3639 20.3018 11.2009 16.7319C12.0714 13.0951 15.3694 11.1007 17.9643 11.0671Z" fill="#40196D"></path><path d="M18.6844 11C21.5806 11.1844 23.7737 12.4916 25.1129 15.0391C26.4187 17.5028 26.2513 20 24.8786 22.4469C23.4388 21.5754 22.0158 20.7207 20.5928 19.8492C20.0236 19.4972 19.4377 19.162 18.8853 18.7933C18.7681 18.7095 18.6509 18.5419 18.6341 18.4078C18.6174 15.9944 18.6174 13.581 18.6341 11.1676C18.6341 11.1508 18.6509 11.1006 18.6844 11Z" fill="white"></path></g><defs><clipPath id="clip0_NEW_ICON"><rect x="11" y="11" width="15" height="15" fill="white"></rect></clipPath></defs></svg>
                <p className="p1">Enjoy cashless payment options online and offline.</p>
            </div>
            <div className="div1">
                <svg width="33" height="34" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><path d="M12.8999 18.6749C12.8999 15.596 15.3958 13.1001 18.4747 13.1001C21.5535 13.1001 24.0495 15.596 24.0495 18.6749C24.0495 21.7537 21.5535 24.2497 18.4747 24.2497C15.3958 24.2497 12.8999 21.7537 12.8999 18.6749Z" fill="white"></path><path d="M9.40039 25.0443H14.2003V20.2443H12.2231L12.223 18.2877H18.0623V22.4003L16.0793 22.4003V27.2002H20.8791V22.4003H18.9168L18.9111 18.2877H24.7504L24.7503 20.2444H22.7582V25.0443H27.558V20.2444H25.5957L25.5957 17.3705H18.9111V15.0001H20.8867V10.2002H16.0868V15.0001H18.0623V17.3705H11.3776L11.3777 20.2443H9.40039V25.0443Z" fill="#40196D"></path></svg>
                <p className="p1">Pay your essential bills and buy gift cards easily.</p>   
            </div>
            </main>
            <main className="main3">
            <div className="div1">
                <svg width="33" height="34" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><path d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z" fill="white"></path><path d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z" fill="#40196D"></path></svg>
                <p class="p1">Get 25 free transfers to Nigerian banks every month.</p>
            </div>
            <div className="div1">
                <svg width="33" height="34" viewBox="0 0 37 38" fill="none"><circle cx="18.5" cy="18.7012" r="18.5" fill="#DFE3FF"></circle><circle cx="17.1547" cy="13.1869" r="3.18693" fill="white"></circle><path d="M25.183 18.097H24.7104C24.3784 17.0684 23.6927 16.057 22.9213 15.3056V12.9612C22.9213 12.8905 22.8469 12.8328 22.7761 12.8328C22.0923 12.8328 21.4759 13.1603 21.0895 13.6656C20.9829 15.6242 19.3516 17.1849 17.367 17.1849C16.1847 17.1849 15.1278 16.6302 14.4451 15.7685C14.1859 16.0488 13.9513 16.3531 13.748 16.6783C13.7406 16.6876 13.732 16.6957 13.7252 16.7054C13.6116 16.8734 13.4231 16.9734 13.2213 16.9734C12.8864 16.9734 12.614 16.7012 12.614 16.3664C12.614 16.1063 12.7795 15.8751 13.0257 15.7915C13.2274 15.723 13.3353 15.5042 13.2668 15.3023C13.1986 15.1009 12.9798 14.9929 12.7779 15.0614C12.2189 15.2512 11.843 15.7757 11.843 16.3662C11.843 17.1254 12.4598 17.7427 13.2184 17.7442C12.9656 18.4114 12.8053 19.1338 12.8053 19.8885C12.8053 21.7882 13.6636 23.5974 15.2065 24.742V26.164C15.2065 26.5992 15.6028 26.969 16.038 26.969H16.5887C17.024 26.969 17.3924 26.5992 17.3924 26.164V25.7688C18.421 26.0272 19.4496 26.0272 20.3497 25.7688V26.164C20.3497 26.5992 20.7787 26.969 21.2139 26.969H21.7644C22.1995 26.969 22.5355 26.5992 22.5355 26.164V24.742C23.5641 23.9714 24.3381 22.8545 24.7104 21.6973H25.183C25.6181 21.6973 26.0072 21.3101 26.0072 20.875V18.9022C26.0072 18.4668 25.6181 18.097 25.183 18.097ZM21.4121 18.8564C20.9527 18.8564 20.5802 18.4841 20.5802 18.0245C20.5802 17.5651 20.9526 17.1924 21.4121 17.1924C21.8717 17.1924 22.2443 17.565 22.2443 18.0245C22.2442 18.4842 21.8715 18.8564 21.4121 18.8564Z" fill="#40196D"></path></svg>
                <p className="p1">Save money automatically any time you spend.</p>
            </div>
        </main>
            <main className="main4">
                <div className="div2">
                    <h1>
                        {`${h1[0]} ${h1[1]} ${h1[2]}`} <br />
                        {`${h1[3]} ${h1[4]} ${h1[5]}`} <br />
                        {`${h1[6]} ${h1[7]} ${h1[8]} ${h1[9]}`} <br />
                        {`${h1[10]} ${h1[11]} ${h1[12]}`} <br />
                    </h1>
                    <p className="p3">We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                    <a className="a b" href="">Open An Account in Minutes</a>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd"d="M0 1.86859L1.39309 0.498047L8 6.99805L1.39309 13.498L0 12.1275L5.21383 6.99805L0 1.86859Z"fill="#40196D"></path></svg>
                </div>
                <div className="got2">
                    <img src={part1} alt="" />
                </div>
            </main>
            <main className="main5">
                <div className="div3">
                    <h1>
                        {/* It’s your money, we <br/> just help you <br/> manage it. */}
                        {`${h2[0]} ${h2[1]} ${h2[2]} ${h2[3]}`} <br />
                        {`${h2[4]} ${h2[5]} ${h2[6]}`} <br />
                        {`${h2[7]} ${h2[8]}`} <br />
                    </h1>
                    <p className="p3">Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                </div>
                <div className="got3">
                    <img src={part2} alt="" />
                </div>
            </main>
            <main className="main6">
                <div className="div4">
                    <h1>Save money as you <br/> spend it, seriously.</h1>
                    <p className="p3">You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                    <a className="a" href="">See all our Savings</a>
                </div>
                <div className="got4">
                    <img src={part3} alt="" />
                </div>
            </main>
            <main className="main7">
                <div className="div5">
                    <h1>Turn off access, <br/> turn on safety.</h1>
                    <p className="p3">Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
                    <a className="a" href="#">Learn more about Cards</a>
                </div>
                <div className="got5">
                    <img src={part4} alt="" />
                </div>
            </main>
            <main className="main8">
                <div className="div6">
                    <h1>We’re always <br/> happy to help you.</h1>
                    <p className="p3">You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                    <a className="a" href="#">Get Help</a>
                </div>
                <div className="got6">
                    <img src={part5} alt="" />
                </div>
            </main>
            <main className="main9">
                <div className="div7">
                    <h1>Fees as clear as <br/> glass.</h1>
                    <p className="p3">We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                    <a className="a" href="#">See all our fees</a>
                </div>
                <div className="got7">
                    <img src={part6} alt="" />
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
                    <div className="div25">
                        <svg width="99" height="22" viewBox="0 0 99 22" fill="none"><path d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z" fill="#40196D"></path><path d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z" fill="#40196D"></path><path d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z" fill="#40196D"></path></svg>
                    </div>
               </div>
                <div className="div15">
                    <div className="div25">
                        <span className="span3">Transfer Fee</span>
                    </div>
                    <div className="div25 div26">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg>
                        </span>
                        <span>Up to ₦50 plus V.A.T.</span>
                    </div>
                    <div className="div25 div26">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg>
                        </span>
                        <span>25 free transfers every month</span>
                    </div>
                </div>
                <div className="div16">
                    <div className="div25">
                        <span className="span3">Debit Card</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>₦1,000 plus V.A.T</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>Free</span>
                    </div>
                </div>
                <div className="div17">
                    <div className="div25">
                        <span className="span3">Card Delivery</span>
                    </div>
                    <div className="div25 div26">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg>
                        </span>
                        <span>
                            <img src={emoji} />
                        </span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>Yes</span>
                    </div>
                </div>
                <div className="div18">
                    <div className="div25">
                        <span className="span3">Card Maintenance Fee</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>Up to ₦50 per quarter</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>No</span>
                    </div>
                </div>
                <div className="div19">
                    <div className="div25">
                        <span className="span3">Alerts</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>Charge for SMS alerts</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>Free instant notifications</span>
                    </div>
                </div>
                <div className="div20">
                    <div className="div25">
                        <span className="span3">Annual Interest</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>4%</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>Up to 15%</span>
                    </div>
                </div>
                <div className="div21">
                    <div className="div25">
                        <span className="span3">Bill Payment Fee</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>Up to ₦100 per bill</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>No</span>
                    </div>
                </div>
                <div className="div22">
                    <div className="div25">
                        <span className="span3">Instant Reversals</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>
                            <img src={emoji1} alt="" />
                        </span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
                        <span>Yes</span>
                    </div>
                </div>
                <div className="div23">
                    <div className="div25">
                        <span className="span3">Maintenance</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DBDCE0"></circle><rect x="3" y="6.99902" width="10" height="2" rx="1" fill="#979797"></rect></svg></span>
                        <span>Yes</span>
                    </div>
                    <div className="div25 div26">
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#DFE3FF"></circle><path d="M6.39745 9.9415L10.9134 5.21316C11.1848 4.92895 11.625 4.92895 11.8964 5.21316C12.1679 5.49738 12.1679 5.9582 11.8964 6.24242L6.39745 12L3.20359 8.65592C2.93214 8.3717 2.93214 7.91089 3.20359 7.62667C3.47504 7.34245 3.91515 7.34245 4.18661 7.62667L6.39745 9.9415Z" fill="#40196D"></path></svg></span>
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
                <div className="div27">
                    <img src={part7} />
                </div>
            </main>
        </>
    )
}

export default Main