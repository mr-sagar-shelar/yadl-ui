import type { Meta, StoryObj } from "@storybook/react";
import Themeisle414 from "../Themeisle414";

const meta: Meta<typeof Themeisle414> = { title: "Themeisle/Themeisle414", component: Themeisle414 };

export default meta;
type Story = StoryObj<typeof Themeisle414>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
