import type { Meta, StoryObj } from "@storybook/react";
import Themeisle467 from "../Themeisle467";

const meta: Meta<typeof Themeisle467> = { title: "Themeisle/Themeisle467", component: Themeisle467 };

export default meta;
type Story = StoryObj<typeof Themeisle467>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
