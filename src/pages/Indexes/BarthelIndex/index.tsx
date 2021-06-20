import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import { Accordion } from '../../../components/Accordion';
import { IndexHeader } from '../../../components/IndexHeader';
import { ScaleAnswerModal } from '../../../components/ScaleAnswerModal';

import {
  IndexContainer,
  AccordionContainer,
  ModalContent,
  ScoreResultContainer,
  ScoreText,
} from './styles';

export function BarthelIndex(): JSX.Element {
  const [alimentationScore, setAlimentationScore] = useState<number>(0);
  const [bathScore, setBathScore] = useState<number>(0);
  const [routineScore, setRoutineScore] = useState<number>(0);
  const [dressUpScore, setDressUpScore] = useState<number>(0);
  const [intestineScore, setIntestineScore] = useState<number>(0);
  const [urinaryScore, setUrinaryScore] = useState<number>(0);

  const [barthelScore, setBarthelScore] = useState(0);

  const [isAlimentationModalVisible, setAlimentationModalVisible] =
    useState(false);
  const [isBathModalVisible, setBathModalVisible] = useState(false);
  const [isRoutineModalVisible, setRoutineModalVisible] = useState(false);
  const [isDressUpModalVisible, setDressUpModalVisible] = useState(false);
  const [isIntestineModalVisible, setIntestineModalVisible] = useState(false);
  const [isUrinaryModalVisible, setUrinaryModalVisible] = useState(false);

  useEffect(() => {
    setBarthelScore(
      alimentationScore +
        bathScore +
        routineScore +
        dressUpScore +
        intestineScore +
        urinaryScore,
    );
  }, [
    alimentationScore,
    bathScore,
    routineScore,
    dressUpScore,
    intestineScore,
    urinaryScore,
  ]);

  const toggleModal = (section: string) => {
    if (section === 'alimentation') {
      setAlimentationModalVisible(!isAlimentationModalVisible);
      return;
    }
    if (section === 'bath') {
      setBathModalVisible(!isBathModalVisible);
      return;
    }
    if (section === 'routine') {
      setRoutineModalVisible(!isRoutineModalVisible);
      return;
    }
    if (section === 'dressUp') {
      setDressUpModalVisible(!isDressUpModalVisible);
      return;
    }
    if (section === 'intestine') {
      setIntestineModalVisible(!isIntestineModalVisible);
      return;
    }
    if (section === 'urinary') {
      setUrinaryModalVisible(!isUrinaryModalVisible);
    }
  };

  return (
    <IndexContainer>
      <ScrollView>
        <IndexHeader indexName="Índice de Barthel" />
        <AccordionContainer>
          <Accordion
            title="Alimentação"
            onPress={() => toggleModal('alimentation')}
            value={alimentationScore}
          />
          <Accordion
            title="Banho"
            onPress={() => toggleModal('bath')}
            value={bathScore}
          />
          <Accordion
            title="Atividades rotineiras"
            onPress={() => toggleModal('routine')}
            value={routineScore}
          />
          <Accordion
            title="Vestir-se"
            onPress={() => toggleModal('dressUp')}
            value={dressUpScore}
          />
          <Accordion
            title="Intestino"
            onPress={() => toggleModal('intestine')}
            value={intestineScore}
          />
          <Accordion
            title="Sistema urinário"
            onPress={() => toggleModal('urinary')}
            value={urinaryScore}
          />

          <ScoreResultContainer>
            <ScoreText>SCORE</ScoreText>
            <ScoreText>{barthelScore >= 0 ? barthelScore : 0}</ScoreText>
          </ScoreResultContainer>

          {/* MODAIS */}
          <Modal
            isVisible={isAlimentationModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setAlimentationModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Incapacitado"
                onPress={() => {
                  toggleModal('alimentation');
                  setAlimentationScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Precisa de ajuda para cortar, passar manteiga, etc, ou dieta
                  modificada"
                onPress={() => {
                  toggleModal('alimentation');
                  setAlimentationScore(5);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Independente"
                onPress={() => {
                  toggleModal('alimentation');
                  setAlimentationScore(10);
                }}
              />
            </ModalContent>
          </Modal>

          <Modal
            isVisible={isBathModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setBathModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Dependente"
                onPress={() => {
                  toggleModal('bath');
                  setBathScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Independente (ou no chuveiro)"
                onPress={() => {
                  toggleModal('bath');
                  setBathScore(5);
                }}
              />
            </ModalContent>
          </Modal>

          <Modal
            isVisible={isRoutineModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setRoutineModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Precisa de ajuda com a higiene pessoal"
                onPress={() => {
                  toggleModal('routine');
                  setRoutineScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Independente rosto/cabelo/dentes/barbear"
                onPress={() => {
                  toggleModal('routine');
                  setRoutineScore(5);
                }}
              />
            </ModalContent>
          </Modal>

          <Modal
            isVisible={isDressUpModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setDressUpModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Dependente"
                onPress={() => {
                  toggleModal('dressUp');
                  setDressUpScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Precisa de ajuda mas consegue fazer uma parte sozinho"
                onPress={() => {
                  toggleModal('dressUp');
                  setDressUpScore(5);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Independente"
                onPress={() => {
                  toggleModal('dressUp');
                  setDressUpScore(10);
                }}
              />
            </ModalContent>
          </Modal>

          <Modal
            isVisible={isIntestineModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setIntestineModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Incontinente (necessidade de enemas)"
                onPress={() => {
                  toggleModal('intestine');
                  setIntestineScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Acidente ocasional"
                onPress={() => {
                  toggleModal('intestine');
                  setIntestineScore(5);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Continente"
                onPress={() => {
                  toggleModal('intestine');
                  setIntestineScore(10);
                }}
              />
            </ModalContent>
          </Modal>

          <Modal
            isVisible={isUrinaryModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setUrinaryModalVisible(false)}
          >
            <ModalContent>
              <ScaleAnswerModal
                answerTitle="Incontinente, ou cateterizado e incapaz de manejo"
                onPress={() => {
                  toggleModal('urinary');
                  setUrinaryScore(0);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Acidente ocasional"
                onPress={() => {
                  toggleModal('urinary');
                  setUrinaryScore(5);
                }}
              />
              <ScaleAnswerModal
                answerTitle="Continente"
                onPress={() => {
                  toggleModal('urinary');
                  setUrinaryScore(10);
                }}
              />
            </ModalContent>
          </Modal>
        </AccordionContainer>
      </ScrollView>
    </IndexContainer>
  );
}
