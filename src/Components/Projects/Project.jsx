import React from 'react';
import pro from './Project.module.css';
import project from '../../assets/profile-search.png';
import loan from '../../assets/loan.png';
import instagram from '../../assets/instagram.png';
import star from '../../assets/star-wars.png';
import form from '../../assets/form.png';
import todo from '../../assets/todo.png';
import ecommerce from '../../assets/ecommerce.png';
import udemy from '../../assets/udemy.png';
import cr7 from '../../assets/cr7.png';
import watch from '../../assets/watch.png';

function Project ()  {
  return (
    <div id='project' className={pro.project_main_container}>
    <div className={pro.project_main_container__h2}>
        <h2>Projects</h2>
    </div>
    <div className={pro.project_container}>
    <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={loan} alt="" />
            </div>
            <h3>Loanify App</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Edleychris/Loan" target='_blank'>Github</a>
            <a href="https://loan-indol.vercel.app" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={form} alt="" />
            </div>
            <h3>Contact Form</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/react-contact-form" target='_blank'>Github</a>
            <a href="https://my-react-contact-form.netlify.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={ecommerce} alt="" />
            </div>
            <h3>Mini-Ecommerce</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/Mini-ecommerce-website" target='_blank'>Github</a>
            <a href="https://mini-ecommere-website.netlify.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={instagram} alt="" />
            </div>
            <h3>Instagram</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/my-instagram-clone" target='_blank'>Github</a>
            <a href="https://lois-instagram-clone.netlify.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={project} alt="" />
            </div>
            <h3>Profile Search App</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/profile-search-app" target='_blank'>Github</a>
                <a href="https://my-profile-search-app.netlify.app/" target='_blank'>Live Demo</a>
                </div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={star} alt="" />
            </div>
            <h3>Star Wars</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/star-wars/tree/routed" target='_blank'>Github</a>
            <a href="https://star-wars-more-info.netlify.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={todo} alt="" />
            </div>
            <h3>To-do List</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/todo-list-stutern" target='_blank'>Github</a>
            <a href="https://loistodolist.netlify.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={udemy} alt="" />
            </div>
            <h3>Udemy</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/udemy-clone" target='_blank'>Github</a>
            <a href="https://udemy-clone-chi.vercel.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={cr7} alt="" />
            </div>
            <h3>Christiano Ronaldo</h3>
            <div className={pro.project_item_cta}><a href="https://github.com/Esimehro/cristiano-clone" target='_blank'>Github</a>
            <a href="https://cr7-clone-tx8t.vercel.app/" target='_blank'>Live Demo</a></div>
        </article>

        <article className={pro.project_item}>
            <div className={pro.project_item_image}>
                <img src={watch} alt="" />
            </div>
            <h3>Date-Time App</h3>
            <div className={pro.project_item_cta}>
                <a href="https://github.com/Esimehro/date-time-app" target='_blank'>Github</a>
            <a href="https://date-time-app.vercel.app/" target='_blank'>Live Demo</a></div>
        </article>
    </div>
</div>
  )
}
export default Project;