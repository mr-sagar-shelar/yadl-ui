import type { Meta, StoryObj } from "@storybook/react";
import Themeisle88 from "../Themeisle88";

const meta: Meta<typeof Themeisle88> = { title: "Themeisle/Themeisle88", component: Themeisle88 };

export default meta;
type Story = StoryObj<typeof Themeisle88>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
