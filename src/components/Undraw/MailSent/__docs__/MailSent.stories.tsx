import type { Meta, StoryObj } from "@storybook/react";
import MailSent from "../MailSent";

const meta: Meta<typeof MailSent> = { title: "unDraw/MailSent", component: MailSent };

export default meta;
type Story = StoryObj<typeof MailSent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
