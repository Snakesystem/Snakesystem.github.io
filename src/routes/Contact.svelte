<script>
  import { t } from "../lang";
  import Swal from "sweetalert2";
  import { BadRequest } from "../lib/app";

  let loading = $state(false);

  let formData = $state({
    name: "",
    recipient: "",
    subject: "",
    message: "",
  });

  async function submitContact() {
    loading = true;
    const response = await fetch("https://snakesystem-web-api-tdam.shuttle.app/api/v1/email/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    if (response.ok) {
      loading = false;
      formData = {
        name: "",
        recipient: "",
        subject: "",
        message: "",
      }
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Message sent successfully",
      });
      return;
    }

    if (response.status === 400) {
      loading = false;
      const badRequestError = BadRequest(data.error);

      Swal.fire({
        icon: "error",
        title: data.message,
        text: `${badRequestError.field}: ${badRequestError.error}`,
      });
    } else {
      loading = false;
      // Other errors
      Swal.fire({
        icon: "error",
        title: data.message,
        text: typeof data.error === "string"
          ? data.error
          : JSON.stringify(data.error),
      });
    }
  }

</script>

<section id="contact" class="contact section">
{#if loading === true}
<div id="preloader"></div>
{/if}
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{$t('contact_title')}</h2>
      <p>{$t('contact_desc')}</p>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-4">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>Cinere, Depok, Indonesia</p>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <a href="https://api.whatsapp.com/send?phone=6281548266828" target="_blank" class="tel-link"><p>+62 815-4826-6828</p></a>
            </div>
          </div><!-- End Info Item -->

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>feryirawansyah09@gmail.com</p>
            </div>
          </div><!-- End Info Item -->

        </div>

        <div class="col-lg-8">
          <form class="php-email-form" data-aos="fade-up" data-aos-delay="200" onsubmit={(e) => {
            e.preventDefault();
            submitContact();
          }}>
            <div class="row gy-4">

              <div class="col-md-6">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" class="form-control" placeholder="Your Name" autocomplete="off" required bind:value={formData.name}>
              </div>

              <div class="col-md-6 ">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" class="form-control" name="email" placeholder="Your Email" autocomplete="off" required bind:value={formData.recipient}>
              </div>

              <div class="col-md-12">
                <label for="subject" class="form-label">Service</label>
                <!-- <input type="text" class="form-control" name="subject" placeholder="Subject" required bind:value={formData.subject}> -->
                 <select class="form-control" id="subject" name="subject" required bind:value={formData.subject}>
                   <option value="" class="text-muted">--- Pilih Layanan Email ---</option>
                   <option value="KONSULTASI">KONSULTASI APLIKASI</option>
                   <option value="PEMESANAN APLIKASI">PEMESANAN APLIKASI</option>
                   <option value="PENAMBAHAN FITUR">PENAMBAHAN FITUR BARU</option>
                   <option value="KERJASAMA">KERJASAMA DENGAN KAMI</option>
                   <option value="PENAWARAN KERJA">PENAWARAN PEKERJAAN</option>
                 </select>
              </div>

              <div class="col-md-12">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" rows="6" placeholder="Message" required bind:value={formData.message}></textarea>
              </div>

              <div class="col-md-12 text-center">

                <button type="submit">{$t('send_message')}</button>
              </div>

            </div>
          </form>
        </div><!-- End Contact Form -->

      </div>

    </div>

  </section>

<style scoped>
  @media screen and (max-width: 768px) {
    #contact .section-title {
      margin-bottom: -3rem;
    }

    #contact .section-title h2 {
      font-size: 1.6rem;
    }

    #contact .section-title p {
      font-size: 0.9rem;
    }
    
  }
</style>