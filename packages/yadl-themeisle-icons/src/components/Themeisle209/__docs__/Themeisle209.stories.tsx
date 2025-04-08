import type { Meta, StoryObj } from "@storybook/react";
import Themeisle209 from "../Themeisle209";

const meta: Meta<typeof Themeisle209> = { title: "Themeisle/Themeisle209", component: Themeisle209 };

export default meta;
type Story = StoryObj<typeof Themeisle209>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
