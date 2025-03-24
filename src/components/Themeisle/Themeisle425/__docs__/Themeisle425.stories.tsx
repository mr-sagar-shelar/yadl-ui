import type { Meta, StoryObj } from "@storybook/react";
import Themeisle425 from "../Themeisle425";

const meta: Meta<typeof Themeisle425> = { title: "Themeisle/Themeisle425", component: Themeisle425 };

export default meta;
type Story = StoryObj<typeof Themeisle425>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
