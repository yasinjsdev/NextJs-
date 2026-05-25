import React from 'react'
import styles from "./post.module.css"

const PostsContainer = () => {
    return (
        <div className={styles.container} >
            <section className={styles.content} >
                <div className={styles.postHeader} >
                    <p className={styles.recent} >Recent posts</p>
                    <p className={styles.view} >View All</p>
                </div>
                <div className={styles.cardContainer} >
                    <div className={styles.card} >
                        <h2 className={styles.cardHeading}>Making a design system from scratch</h2>
                        <div className={styles.options} >
                            <span>12 Feb 2020</span> |
                            <span>Design, Pattern</span>
                        </div>
                        <p className={styles.cardDesc} >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className={styles.card} >
                        <h2 className={styles.cardHeading}>Making a design system from scratch</h2>
                        <div className={styles.options} >
                            <span>12 Feb 2020</span> |
                            <span>Design, Pattern</span>
                        </div>
                        <p className={styles.cardDesc} >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className={styles.card} >
                        <h2 className={styles.cardHeading}>Making a design system from scratch</h2>
                        <div className={styles.options} >
                            <span>12 Feb 2020</span> |
                            <span>Design, Pattern</span>
                        </div>
                        <p className={styles.cardDesc} >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostsContainer