import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { IndexHeader } from '../../../components/IndexHeader';

import {
  IndexContainer,
  Title,
  AccordionContainer,
  AccordionTitle,
  Accordion,
  ModalContent,
  AnswerTitle,
  SelectAnswerButton,
  Answer,
  ScoreResultContainer,
  ScoreText,
} from './styles';

export function BarthelIndex(): JSX.Element {
  const theme = useTheme();

  const [alimentationScore, setAlimentationScore] = useState({} as number);
  const [bathScore, setBathScore] = useState({} as number);
  const [routineScore, setRoutineScore] = useState({} as number);
  const [dressUpScore, setDressUpScore] = useState({} as number);
  const [intestineScore, setIntestineScore] = useState({} as number);
  const [urinaryScore, setUrinaryScore] = useState({} as number);

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
          <Title>Alimentação</Title>
          <Accordion>
            <AccordionTitle>
              {alimentationScore >= 0
                ? `Score ${alimentationScore}`
                : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback
              onPress={() => toggleModal('alimentation')}
            >
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>
          <Title>Banho</Title>
          <Accordion>
            <AccordionTitle>
              {bathScore >= 0 ? `Score ${bathScore}` : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback onPress={() => toggleModal('bath')}>
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>
          <Title>Atividades rotineiras</Title>
          <Accordion>
            <AccordionTitle>
              {routineScore >= 0
                ? `Score ${routineScore}`
                : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback onPress={() => toggleModal('routine')}>
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>
          <Title>Vestir-se</Title>
          <Accordion>
            <AccordionTitle>
              {dressUpScore >= 0
                ? `Score ${dressUpScore}`
                : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback onPress={() => toggleModal('dressUp')}>
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>
          <Title>Intestino</Title>
          <Accordion>
            <AccordionTitle>
              {intestineScore >= 0
                ? `Score ${intestineScore}`
                : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback onPress={() => toggleModal('intestine')}>
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>
          <Title>Sistema urinário</Title>
          <Accordion>
            <AccordionTitle>
              {urinaryScore >= 0
                ? `Score ${urinaryScore}`
                : 'Selecione um valor'}
            </AccordionTitle>
            <TouchableWithoutFeedback onPress={() => toggleModal('urinary')}>
              <AntDesign name="down" size={24} color={theme.colors.text} />
            </TouchableWithoutFeedback>
          </Accordion>

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
              <Answer>
                <AnswerTitle>Incapacitado</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('alimentation');
                    setAlimentationScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>
                  Precisa de ajuda para cortar, passar manteiga, etc, ou dieta
                  modificada
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('alimentation');
                    setAlimentationScore(5);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Incapacitado</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('alimentation');
                    setAlimentationScore(10);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
          <Modal
            isVisible={isBathModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setBathModalVisible(false)}
          >
            <ModalContent>
              <Answer>
                <AnswerTitle>Dependente</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('bath');
                    setBathScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Independente (ou no chuveiro)</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('bath');
                    setBathScore(5);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
          <Modal
            isVisible={isRoutineModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setRoutineModalVisible(false)}
          >
            <ModalContent>
              <Answer>
                <AnswerTitle>
                  Precisa de ajuda com a higiene pessoal
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('routine');
                    setRoutineScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>
                  Independente rosto/cabelo/dentes/barbear
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('routine');
                    setRoutineScore(5);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
          <Modal
            isVisible={isDressUpModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setDressUpModalVisible(false)}
          >
            <ModalContent>
              <Answer>
                <AnswerTitle>Dependente</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('dressUp');
                    setDressUpScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>
                  Precisa de ajuda mas consegue fazer uma parte sozinho
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('dressUp');
                    setDressUpScore(10);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>
                  Independente (incluindo botões, zipers, laços, etc.)
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('dressUp');
                    setDressUpScore(10);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
          <Modal
            isVisible={isIntestineModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setIntestineModalVisible(false)}
          >
            <ModalContent>
              <Answer>
                <AnswerTitle>Incontinente (necessidade de enemas)</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('intestine');
                    setIntestineScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Acidente ocasional</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('intestine');
                    setIntestineScore(5);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Continente</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('intestine');
                    setIntestineScore(10);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
          <Modal
            isVisible={isUrinaryModalVisible}
            style={{ margin: 0 }}
            onBackdropPress={() => setUrinaryModalVisible(false)}
          >
            <ModalContent>
              <Answer>
                <AnswerTitle>
                  Incontinente, ou cateterizado e incapaz de manejo
                </AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('urinary');
                    setUrinaryScore(0);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Acidente ocasional</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('urinary');
                    setUrinaryScore(5);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
              <Answer>
                <AnswerTitle>Continente</AnswerTitle>
                <TouchableWithoutFeedback
                  onPress={() => {
                    toggleModal('urinary');
                    setUrinaryScore(10);
                  }}
                >
                  <SelectAnswerButton>
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={24}
                      color="black"
                    />
                  </SelectAnswerButton>
                </TouchableWithoutFeedback>
              </Answer>
            </ModalContent>
          </Modal>
        </AccordionContainer>
      </ScrollView>
    </IndexContainer>
  );
}
