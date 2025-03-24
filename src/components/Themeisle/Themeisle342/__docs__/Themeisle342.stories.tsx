import type { Meta, StoryObj } from "@storybook/react";
import Themeisle342 from "../Themeisle342";

const meta: Meta<typeof Themeisle342> = { title: "Themeisle/Themeisle342", component: Themeisle342 };

export default meta;
type Story = StoryObj<typeof Themeisle342>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
