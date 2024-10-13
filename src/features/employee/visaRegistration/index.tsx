import { responsiveStyle } from '@utils/responsive';
import { Button, Flex, Input, Modal } from '@/components/common';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

export default function VisaRegistrationForm() {
  const [foreignerNumber, setForeignerNumber] = useState('');
  const [visaGenerateDate, setVisaGenerateDate] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForeignerNumber = (number: string) => {
    const regex = /^\d{6}-\d{7}$/;
    return regex.test(number);
  };

  const handleForeignerNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!validateForeignerNumber(value) && value !== '') {
      setError('올바른 형식으로 입력해주세요. (형식: 000000-0000000)');
      setIsFormValid(false);
    } else {
      setError('');
      setIsFormValid(true);
    }
    setForeignerNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label="외국인 번호"
            type="text"
            value={foreignerNumber}
            onChange={handleForeignerNumberChange}
            style={inputStyle}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Flex>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label="비자 발급 일자"
            type="date"
            value={visaGenerateDate}
            onChange={(e) => setVisaGenerateDate(e.target.value)}
            style={inputStyle}
            required
          />
        </Flex>
        <Flex justifyContent="center">
          <Button type="submit" style={buttonStyle} disabled={!isFormValid}>
            등록하기
          </Button>
        </Flex>
      </Form>
      {isModalOpen && (
        <Modal
          textChildren="등록이 완료되었습니다."
          buttonChildren={<Button onClick={closeModal}>확인</Button>}
          onClose={closeModal}
        />
      )}
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  ${responsiveStyle({
    tablet: {
      gap: '20px',
      padding: '0 20px',
    },
    mobile: {
      padding: '0 15px',
    },
  })}
`;

const inputStyle = {
  padding: '15px 20px',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#0A65CC',
  color: '#fff',
  borderRadius: '4px',
};

const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;
