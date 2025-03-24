import type { Meta, StoryObj } from "@storybook/react";
import CustomerSurvey from "../CustomerSurvey";

const meta: Meta<typeof CustomerSurvey> = { title: "unDraw/CustomerSurvey", component: CustomerSurvey };

export default meta;
type Story = StoryObj<typeof CustomerSurvey>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
