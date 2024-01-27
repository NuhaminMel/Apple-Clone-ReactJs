// import 'bootstrap/dist/css/bootstrap.min.css';
import watchLogoMedium from '../../../../../Image/images/logos/watch/logo_promo_pride23__cnampkeybsty_medium_2x.png'
import watchLogoLarge from '../../../../../Image/images/logos/watch/logo_promo_pride23__cnampkeybsty_large_2x.png'



export default function watchAndMac() {
    return (
    <div>
        <section>
      <div className="container-fluid ">
        <div className="row mb-4">

            <div className="
            apple-watch 
            col-sm-12 
            col-md 
            me-md-2 
            ms-md-3 
            ">
              <div className="text-center mt-5">
                  <div className="d-lg-none">
                      <img src={watchLogoMedium} alt="" />
                  </div>
                  <div className="
                  d-none 
                  d-lg-block
                  ">
                      <img src={watchLogoLarge} alt="" />
                  </div>
              <div className="
              apple-trade-in-disc 
              fs-5
              ">
                      Pride is in the air.
              </div>
              <div className="apple-trade-in-link ">
                      <a className="text-decoration-none" href="/">Shope the new Pride Edition Sport Band</a>
              </div>
              </div>
            </div>

            <div className="
            macbook-pro 
            col-sm-12 
            col-md  
            me-md-3
            ">
                    <div className="
                    macbook-pro-text-holder 
                    text-center 
                    pt-3
                    ">
                      <div className="
                      macbook-pro-title 
                      text-light 
                      fs-2 
                      fw-bold 
                      ">
                        MacBook Pro
                      </div>
                      <div className="
                      macbook-pro-disc 
                      text-light 
                      fs-6
                      ">
                        Super Charged by M2 Pro and M2 Max
                      </div>
                      <div className="
                      macbook-pro-link-holder 
                      text-center
                      ">
                        <ul className="
                        d-flex 
                        list-unstyled 
                        mx-auto 
                        mt-2
                        ">
                          <li>
                            <a className="text-decoration-none" href="/">Learn more</a>
                          </li>
                          <li><a className="text-decoration-none" href="/">Buy</a></li>
                        </ul>
                      </div>
                    </div>
            </div>
          </div>
      </div>
    </section>
    </div>
    )
}
