import React from "react";

const Footer = () => (
    <footer class="pt-3 mt-4 border-top bg-light">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-md">
                    <title>Logo</title>
                    <i class="fa fa-paw"></i>
                    <small class="d-block mb-3 text-muted">&copy; 2021</small>
                </div>
                <div class="col-6 col-lg">
                    <h5>Github</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary" href="https://github.com/sprmbng/projetoWebDev" target="_blank"><i class="fa fa-github fa-fw"></i>Project Link</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary" href="/about"><i class="fa fa-bookmark fa-fw"></i>About us</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="link-secondary" href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                        <li><a class="link-secondary" href="https://fontawesome.com/" target="_blank">Font Awesome</a></li>
                        <li><a class="link-secondary" href="https://www.mongodb.com/pt-br" target="_blank">Mongodb</a></li>
                        <li><a class="link-secondary" href="https://www.freepik.com/photos/pets" target="_blank">Pets photo created by freepik</a></li>
                        <li><a class="link-secondary" href="https://pt-br.reactjs.org/" target="_blank">ReactJS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;
