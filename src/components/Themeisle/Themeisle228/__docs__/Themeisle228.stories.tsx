import type { Meta, StoryObj } from "@storybook/react";
import Themeisle228 from "../Themeisle228";

const meta: Meta<typeof Themeisle228> = { title: "Themeisle/Themeisle228", component: Themeisle228 };

export default meta;
type Story = StoryObj<typeof Themeisle228>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
