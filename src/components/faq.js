import BackBtn from "./backbtn";
import styles from "./faq.module.css";
import Spacer from "./spacer";
import { Row } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>FAQs</div>
        <div className={styles.body}>
          <span className={styles.question}>
            How is this different from other programs that seek to help
            individuals reduce their technology usage?
          </span>
          <br />
          <Spacer />
          <div>
            1) The program is not online in any meaningful way, the website
            consists only of the document itself
          </div>
          <div>
            2) It is adaptable based upon the self-identified traits and needs
            of the particular reader
          </div>
          <Spacer />
          <span className={styles.question}>
            Won’t an entirely off-line program be hard with regards to adherence
            and completion?
          </span>
          <br />
          <Spacer />
          <div>
            The problem with app and online-based programs is that they require
            a person to engage with the exact technologies that are the
            foundation of the problem in the first place. A potentially useful
            metaphor would be setting an alcohol detox program in a brewery.
            Over time, we believe this is the only way to truly detether from
            technology.
          </div>
          <Spacer />
          <span className={styles.question}>
            How will success be determined?
          </span>
          <br />
          <Spacer />
          <div>
            Initially, the only quantitative measures of success will be number
            of pages read and program downloads, in additional to feedback from
            readers. While this limits our ability to judge the success of the
            program at this time, it allows us to share material in a way that
            builds trust as no personal data will be required.
          </div>
          <Spacer />
          <span className={styles.question}>Why launch now?</span>
          <br />
          <Spacer />
          <div>
            One of the biggest drivers of stress at this point in time comes
            from reading the news and engaging with social media. Between the
            election and pandemic, we have observed an acute rise in
            self-reports of “dread” and melancholy related to device use and
            social engagement.
          </div>
          <Spacer />
          <span className={styles.question}>
            Aren’t most successful programs of this type (AA, etc) reliant upon
            peer communities and support(s)?
          </span>
          <br />
          <Spacer />
          <div>
            The program outlines ways for people to participate together and
            share experiences through voice calls and even Zoom chats. As such,
            peer engagement is possible. Additionally, we will do our best to
            answer emails from participants when they have questions, although
            we will not be adding much to the main page to ensure people do not
            feel the need to go back online for that.
          </div>
          <Spacer />
          <span className={styles.question}>
            Will this be a modern day tuning out when actually people need to be
            aware of what is going on around them?
          </span>
          <br />
          <Spacer />
          <div>
            We believe that individuals on things like politics are as informed
            as they need to be to make their voting decisions. Furthermore, we
            believe that people will find it particularly empowering to channel
            the time spent on platforms reacting to the news instead towards
            proactive engagement, engagement that will have less negative
            partisanship.
          </div>
          <Spacer />
          <span className={styles.question}>
            What is the end goal for this?
          </span>
          <br />
          <Spacer />
          <div>
            Our hope is that this is disseminated and utilized by a cohort of
            people who would be willing to provide feedback to make it better,
            and eventually help spread the word about it in their communities.
          </div>
        </div>
        <Row className="mx-auto justify-content-center">
          <BackBtn />
        </Row>
      </div>
    </div>
  );
};

export default FAQ;
