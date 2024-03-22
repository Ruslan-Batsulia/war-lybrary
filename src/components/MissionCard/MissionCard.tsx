import Image from "next/image";

import anubisEasy from "@/../public/missions/anubis/anubis-easy.png";
import difficultyEasyActive from "@/../public/missions/difficulty-easy-active.svg";
import difficultyNormalDefault from "@/../public/missions/difficulty-normal-default.svg";
import difficultyHardDefault from "@/../public/missions/difficulty-hard-default.svg";
import crown from "@/../public/icons/crown.svg";
import crownScore from "@/../public/icons/score.png";
import crownTime from "@/../public/icons/time.png";
import crownLine from "@/../public/icons/line-crown.svg";

import "./MissionCard.scss";

export default function MissionCard() {
  return(
    <div className="mission-card">
      <div className="mission-card__difficulty">
        <ul className="difficulty__list">
          <li className="list__item">
            <Image
              className="item__img active"
              src={difficultyEasyActive}
              alt="difficulty easy"
            />
          </li>
          <li className="list__item">
            <Image
              className="item__img default"
              src={difficultyNormalDefault}
              alt="difficulty normal"
            />
          </li>
          <li className="list__item">
            <Image
              className="item__img default"
              src={difficultyHardDefault}
              alt="difficulty hard"
            />
          </li>
        </ul>
        <div className="difficulty__title">
          <span className="title__description easy">АНУБІС</span>
          <div className="title__reward">
            <span className="reward__count">150</span>
            <div className="reward__crown">
              <Image src={crown} alt="crown" />
            </div>
          </div>
        </div>
        <Image
          className="difficulty__img"
          src={anubisEasy}
          alt="anubis easy"
          width={264}
          height={198}
        />
      </div>

      <div className="mission-card__reward">
        <span className="reward__title">НАГОРОДА</span>
        <div className="reward__crown">
          <div className="crown">
            <Image src={crownScore} alt="" height={50} />
            <div className="score__description">
              <div className="description__count">
                <div className="count__first-last">
                  <span>+7</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
                <div className="count__center">
                  <span>+19</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
                <div className="count__first-last">
                  <span>+34</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
              </div>
              <Image src={crownLine} alt="" />
              <div className="description__count">
                <div className="count__first-last">
                  <span>373 500</span>
                </div>
                <div className="count__center">
                  <span>591 500</span>
                </div>
                <div className="count__first-last">
                  <span>739 000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="crown">
            <Image src={crownTime} alt="" height={50} />
            <div className="score__description">
              <div className="description__count">
                <div className="count__first-last">
                  <span>+7</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
                <div className="count__center">
                  <span>+19</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
                <div className="count__first-last">
                  <span>+34</span>
                  <div>
                    <Image src={crown} alt="crown" width={15} />
                  </div>
                </div>
              </div>
              <Image src={crownLine} alt="" />
              <div className="description__count">
                <div className="count__first-last">
                  <span>00:48:30</span>
                </div>
                <div className="count__center">
                  <span>00:37:30</span>
                </div>
                <div className="count__first-last">
                  <span>00:33:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
