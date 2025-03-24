import type { Meta, StoryObj } from "@storybook/react";
import Themeisle21 from "../Themeisle21";

const meta: Meta<typeof Themeisle21> = { title: "Themeisle/Themeisle21", component: Themeisle21 };

export default meta;
type Story = StoryObj<typeof Themeisle21>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
