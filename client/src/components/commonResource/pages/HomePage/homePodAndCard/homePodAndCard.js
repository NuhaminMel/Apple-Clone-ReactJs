// import 'bootstrap/dist/css/bootstrap.min.css';
import cardLogoSmall from "../../../../../Image/images/logos/card/logo__dcojfwkzna2q_small_2x.png"
import cardLogoLarge from "../../../../../Image/images/logos/card/logo__dcojfwkzna2q_large_2x.png"


export default function homePodAndCard() {
  return (
    <div>
            <section>
      <div class="container-fluid ">
        <div class="row mb-4">
            <div class="
            apple-home-pod 
            col-sm-12 
            col-md 
            me-md-2 
            ms-md-3 
            ">
              <div class="
              text-center 
              mt-5
              ">
                <div class="
                text-light 
                display-5 
                fw-bold 
                ">
                    HomePod
                </div>
                <div class="
                apple-home-pod-disc 
                fs-3 
                text-light
                ">
                      Profound sound.
                </div>
                <div class="
                home-pod-link-holder 
                text-center
                ">
                  <ul class="
                  d-flex 
                  list-unstyled 
                  mx-auto 
                  mt-2 
                  ">
                    <li class="">
                      <a class="text-decoration-none " href="/">Learn more</a>
                    </li>
                    <li class="">
                      <a class="text-decoration-none" href="/">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="
            apple-card 
            col-sm-12 
            col-md  
            me-md-3
            ">
                    <div class="
                    apple-card-text-holder 
                    text-center 
                    mt-5
                    ">
                      <div class="apple-card-logo ">
                        <div class="
                        d-sm-block 
                        d-md-none 
                        ">
                          <img  src={cardLogoSmall} alt="" />
                        </div>
                        <div class="
                        d-none 
                        d-md-block 
                        ">
                          <img  src={cardLogoLarge} alt="" />
                        </div>
                      </div>
                      <div class="
                      apple-card-disc 
                      text-light 
                      fs-4 
                      w-50 
                      mx-auto 
                      fw-normal 
                      text-body
                      ">
                        Get up to 3% Daily cash back with every purchase.
                      </div>
                      <div class="
                      apple-card-link-holder 
                      w-50 
                      mx-auto 
                      text-center
                      ">
                        <ul class="
                        d-flex 
                        list-unstyled 
                        mx-auto 
                        mt-2
                        ">
                          <li class="">
                            <a class="text-decoration-none" href="/">Learn more</a>
                          </li>
                          <li class="">
                            <a class="text-decoration-none" href="/">Applay Now</a>
                          </li>
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
