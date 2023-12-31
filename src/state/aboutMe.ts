import create from 'zustand';
import { AboutMeTypes } from './stateTypes';

const useAboutMeStore = create<AboutMeTypes>(() => ({
  profileData: [
    { id: 1, label: "Name", text: "이명관" },
    { id: 2, label: "Tel", text: "010-8825-6093" },
    { id: 3, label: "Birth", text: "1998.11.29" },
    { id: 4, label: "Address", text: "인천광역시 연수구 연수동" },
    { id: 5, label: "Email", text: "audrhks29@gmail.com" },
    { id: 6, label: "Edu", text: "유한대학교(2년제)" }
  ],
  certificateData: [
    { id: 1, acqDate: "2017. 04", type: "전산회계2급(국가공인)", publisher: "한국세무사협회" },
    { id: 2, acqDate: "2016. 07", type: "웹디자인기능사", publisher: "한국산업인력공단" },
    { id: 3, acqDate: "2016. 05", type: "디지털정보활용능력(DIAT)고급", publisher: "한국정보통신진흥협회" },
    { id: 4, acqDate: "2016. 02", type: "문서실무사", publisher: "한국정보관리협회" },
    { id: 5, acqDate: "2015. 05", type: "정보처리기능사", publisher: "한국산업인력공단" },
    { id: 6, acqDate: "2015. 04", type: "그래픽기술자격(GTQ) 1급", publisher: "한국생산성본부(KPC)" },
    { id: 7, acqDate: "2015. 02", type: "워드프로세서1급", publisher: "대한상공회의소" },
    { id: 8, acqDate: "2014. 10", type: "컴퓨터활용능력2급", publisher: "대한상공회의소" },
    { id: 9, acqDate: "2014. 08", type: "그래픽기술자격(GTQ) 2급", publisher: "한국생산성본부(KPC)" },
  ]
}));

export default useAboutMeStore;