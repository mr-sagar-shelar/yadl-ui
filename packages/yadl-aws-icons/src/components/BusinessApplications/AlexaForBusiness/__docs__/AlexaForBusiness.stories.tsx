import type { Meta, StoryObj } from "@storybook/react";
import AlexaForBusiness from "../AlexaForBusiness";

const meta: Meta<typeof AlexaForBusiness> = { title: "AWS/BusinessApplications/AlexaForBusiness", component: AlexaForBusiness };

export default meta;
type Story = StoryObj<typeof AlexaForBusiness>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
