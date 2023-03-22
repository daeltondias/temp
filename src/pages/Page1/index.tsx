import { Form, GroupForm, InputForm, LabelForm, GridForm, SubmitForm } from "./styles";

export const Page1 = () => {
  return (
    <Form>
      <GroupForm>
        <InputForm
          type="email"
          name="floating_email"
          placeholder=" "
          required
        />
        <LabelForm>Email address</LabelForm>
      </GroupForm>
      <GroupForm>
        <InputForm
          type="password"
          name="floating_password"
          placeholder=" "
          required
        />
        <LabelForm>Password</LabelForm>
      </GroupForm>
      <GroupForm>
        <InputForm
          type="password"
          name="repeat_password"
          placeholder=" "
          required
        />
        <LabelForm>Confirm password</LabelForm>
      </GroupForm>
      <GridForm cols={2}>
        <GroupForm>
          <InputForm
            type="text"
            name="floating_first_name"
            placeholder=" "
            required
          />
          <LabelForm>First name</LabelForm>
        </GroupForm>
        <GroupForm>
          <InputForm
            type="text"
            name="floating_last_name"
            placeholder=" "
            required
          />
          <LabelForm>Last name</LabelForm>
        </GroupForm>
      </GridForm>
      <GridForm cols={2}>
        <GroupForm>
          <InputForm
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            placeholder=" "
            required
          />
          <LabelForm>Phone number</LabelForm>
        </GroupForm>
        <GroupForm>
          <InputForm
            type="text"
            name="floating_company"
            placeholder=" "
            required
          />
          <LabelForm>Company (Ex. Google)</LabelForm>
        </GroupForm>
      </GridForm>
      <SubmitForm type="submit">Submit</SubmitForm>
    </Form>
  );
};
