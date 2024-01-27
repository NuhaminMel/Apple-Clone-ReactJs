// import "bootstrap/dist/css/bootstrap.min.css";
import tradInlogoSmall from "../../../../../Image/images/logos/trade in/logo_tradein__d1fpktgipvki_small_2x.png";
import tradInlogoMedium from "../../../../../Image/images/logos/trade in/logo_tradein__d1fpktgipvki_medium_2x.png";
import tradInlogoLarge from "../../../../../Image/images/logos/trade in/logo_tradein__d1fpktgipvki_large_2x.png";
import wwdcLogo from "../../../../../Image/images/logos/wwdc/promo_logo_wwdc23__gcsmmrgbhlme_large_2x.png";

export default function tradeInAndWwdc() {
  return (
    <div>
      <section>
        <div class=" container-fluid">
          <div class="row  ">
            <div class="apple-trade-in col-sm-12 col-md-6 me-md-2 ms-md-3 mt-4 mb-md-4">
              <div class="text-center mt-5">
                <div class="apple-trade-in-logo d-md-none d-lg-none">
                  <img src={tradInlogoSmall} alt="" />
                </div>
                <div class="d-none d-md-block d-lg-none">
                  <img src={tradInlogoMedium} alt="" />
                </div>
                <div class="d-none d-md-none d-lg-block">
                  <img src={tradInlogoLarge} alt="" />
                </div>
                <div class="apple-trade-in-disc fs-5">
                  Upgrade and Save.It's that easy.
                </div>
                <div class="apple-trade-in-link ">
                  <a class="text-decoration-none fs-" href="##">
                    See what your device is worth
                  </a>
                </div>
              </div>
            </div>
            <div class="wwdc  col-sm-12 col-md-6 mt-4 mb-4  d-flex flex-column justify-content-end">
              <div class=" wwdc-text&logo-holder w-50 mx-auto mb-5">
                <div class="text-center align-items-bottom d-flex flex-column justify-content-end">
                  <div>
                    <img src={wwdcLogo} alt="" />
                  </div>

                  <div>
                    Apple Worldwide Developers Conference. Join us online June
                    5-9.
                  </div>
                  <div class="wwdc-link-holder">
                    <a class="text-decoration-none" href="##">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
