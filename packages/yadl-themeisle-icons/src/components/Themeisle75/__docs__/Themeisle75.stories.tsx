import type { Meta, StoryObj } from "@storybook/react";
import Themeisle75 from "../Themeisle75";

const meta: Meta<typeof Themeisle75> = { title: "Themeisle/Themeisle75", component: Themeisle75 };

export default meta;
type Story = StoryObj<typeof Themeisle75>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
