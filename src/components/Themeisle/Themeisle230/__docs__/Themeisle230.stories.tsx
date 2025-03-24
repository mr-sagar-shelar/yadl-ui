import type { Meta, StoryObj } from "@storybook/react";
import Themeisle230 from "../Themeisle230";

const meta: Meta<typeof Themeisle230> = { title: "Themeisle/Themeisle230", component: Themeisle230 };

export default meta;
type Story = StoryObj<typeof Themeisle230>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
