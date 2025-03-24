import type { Meta, StoryObj } from "@storybook/react";
import Amplify from "../Amplify";

const meta: Meta<typeof Amplify> = { title: "AWS/FrontEndWebMobile/Amplify", component: Amplify };

export default meta;
type Story = StoryObj<typeof Amplify>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
