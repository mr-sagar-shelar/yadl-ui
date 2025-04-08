import type { Meta, StoryObj } from "@storybook/react";
import Themeisle357 from "../Themeisle357";

const meta: Meta<typeof Themeisle357> = { title: "Themeisle/Themeisle357", component: Themeisle357 };

export default meta;
type Story = StoryObj<typeof Themeisle357>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
