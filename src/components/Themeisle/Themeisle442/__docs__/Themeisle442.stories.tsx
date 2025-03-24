import type { Meta, StoryObj } from "@storybook/react";
import Themeisle442 from "../Themeisle442";

const meta: Meta<typeof Themeisle442> = { title: "Themeisle/Themeisle442", component: Themeisle442 };

export default meta;
type Story = StoryObj<typeof Themeisle442>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
