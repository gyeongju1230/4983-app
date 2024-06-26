import * as styles from './SignupDepartmentButton.styles';
import {TouchableOpacity} from 'react-native';
import {registerMember} from '@/apis/auth/signup/singupApi';
import {useRecoilState} from 'recoil';
import {
  recoilAccountBank,
  recoilAccountHolder,
  recoilAccountNumber,
  recoilDepartment,
  recoilMarketingAgreement,
  recoilNickname,
  recoilPassword,
  recoilPhoneNumber,
  recoilStudentId,
} from '@/recoil/atoms/SignupAtoms';
import {SigninApi} from '@/apis/auth/signin/SigninApi';

const SignupDepartmentButton = ({navigation, selectedCollegeId}) => {
  const [studentId] = useRecoilState(recoilStudentId);
  const [department] = useRecoilState(recoilDepartment);
  const [nickname] = useRecoilState(recoilNickname);
  const [password] = useRecoilState(recoilPassword);
  const [phoneNumber] = useRecoilState(recoilPhoneNumber);
  const [marketingAgreement] = useRecoilState(recoilMarketingAgreement);
  const [accountHolder] = useRecoilState(recoilAccountHolder);
  const [accountBank] = useRecoilState(recoilAccountBank);
  const [accountNumber] = useRecoilState(recoilAccountNumber);

  return (
    <TouchableOpacity
      hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}
      onPress={() => {
        if (selectedCollegeId === -1) {
          return;
        }

        registerMember(
          studentId,
          department,
          nickname,
          password,
          phoneNumber,
          marketingAgreement,
          accountHolder,
          accountBank,
          accountNumber,
        )
          .then(response => {
            console.log('회원가입 성공:', response);
            SigninApi(studentId, password)
              .then(() => {
                navigation.navigate('SignupComplete');
              })
              .catch(err => {
                console.log('회원가입후 로그인 실패:', err);
              });
          })
          .catch(error => {
            console.error('회원가입 실패:', error);
          });
      }}>
      <styles.ButtonBox selectedCollegeId={selectedCollegeId}>
        <styles.ButtonText selectedCollegeId={selectedCollegeId}>
          다음
        </styles.ButtonText>
      </styles.ButtonBox>
    </TouchableOpacity>
  );
};

export default SignupDepartmentButton;
