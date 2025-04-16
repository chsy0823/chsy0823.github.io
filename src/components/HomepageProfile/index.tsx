import styles from './styles.module.css';
import clsx from 'clsx';
export default function HomepageProfile(): JSX.Element {
  return (
    <section className={styles.profileSection}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <img
              src={require('@site/static/img/profile.png').default}
              alt="Profile"
              className={styles.profileImage}
            />
            <section className={styles.education}>
              <h2>Education.</h2>
              <ul>
                <li>
                  <strong>Konkuk Univ.</strong> - Master of Science in Computer & Information Communication Engineering
                  <br />
                  <em>2016 - 2019</em>
                </li>
                <li>
                  <strong>Konkuk Univ.</strong> - Bachelor of Computer Science
                  <br />
                  <em>2011 - 2016</em>
                </li>
              </ul>
            </section>

          </div>
          <div className={clsx('col col--8', styles.about)}>
            <h1>About Me</h1>
            <blockquote>
              <p>"코드는 단순히 동작하는 기능이 아니라, 협업과 변화에 유연한 구조여야 한다"<br/>
              </p>
            </blockquote>

            <div className="intro">
              <p>👋 안녕하세요, Elon Choi 입니다</p>
              <p>
                저는 <strong>코드로 세상의 문제를 해결하고, 더 나은 방향을 끊임없이 고민하는 소프트웨어 엔지니어</strong>입니다. <br/>
                비효율적인 프로세스에 대해 <strong>자동화, 효율화 할 방법을 찾고 해결</strong>하는 것을 좋아하며, 팀 안에서의 <strong>커뮤니케이션과 협업의 관점에서 좋은 코드를 작성</strong>하는 것을 항상 고민합니다.
              </p>

              <p>
                지난 10년간 대학 학부 시절부터, 석사과정 중 프리랜서로 개인 외주 및 프로젝트를 진행해왔습니다.
                전문연구요원으로 3년간 복무한 후, 스타트업부터 대기업 협업 프로젝트까지 다양한 환경에서&nbsp;
                <strong>백엔드, 프론트엔드, DevOps, 플랫폼 설계</strong> 전반을 경험하며 성장해왔습니다.
                한 분야에 머무르기보다, <strong>"필요한 일을 스스로 정의하고 직접 실행하는 개발자"</strong>로서 역할을 다해왔습니다.
              </p>
              <p>지금까지는 다음과 같은 일들을 해왔습니다:</p>
              <ul>
                <li>노인을 위한 헬스케어 서비스부터 반려동물 AI 앨범, 인터랙티브 숏폼 드라마, 감정 분석 API까지 <strong>다양한 도메인에서 제품을 처음부터 끝까지 구현</strong>
                </li>
                <li>Go, TypeScript, Python, Kubernetes, gRPC, Supabase 등 <strong>현대적인 기술 스택</strong>을 기반으로 <strong>확장성과
                  품질을 모두 고려한 시스템 아키텍처</strong> 설계
                </li>
                <li>GitOps 기반의 <strong>CI/CD 파이프라인</strong>, <strong>Observability 체계</strong>, <strong>CQ(Quality)
                  프로세스</strong> 등 개발 문화 내재화
                </li>
                <li>중/소 규모의 여러 팀에서 <strong>Senior Engineer</strong>로서 팀의 기술 방향을 설정하고 주니어 개발자의 성장을 도우며 <strong>팀의 성숙도와 생산성을 함께 끌어올리는
                  역할</strong></li>
              </ul>
              <p>이 블로그에는 제가 겪은 기술적 고민과 해결 과정, 제품을 만들며 배운 것들, 그리고 기술 그 너머의 이야기를 담고 있습니다.<br/>
                <strong>같이 성장하고 싶은 분들</strong>, 또는 <strong>협업을 고민하시는 분들</strong> 언제든 환영합니다. 😊
              </p>
              <div className={styles.socialLinks}>
                <a href="/blog">
                  Blog
                </a>
                {' | '}
                <a
                  href="https://github.com/chsy0823"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' | '}
                <a
                  href="https://linkedin.com/in/elonchoi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
