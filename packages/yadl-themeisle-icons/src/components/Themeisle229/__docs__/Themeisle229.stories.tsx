import type { Meta, StoryObj } from "@storybook/react";
import Themeisle229 from "../Themeisle229";

const meta: Meta<typeof Themeisle229> = { title: "Themeisle/Themeisle229", component: Themeisle229 };

export default meta;
type Story = StoryObj<typeof Themeisle229>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
