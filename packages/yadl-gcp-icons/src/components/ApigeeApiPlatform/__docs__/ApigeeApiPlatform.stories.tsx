import type { Meta, StoryObj } from "@storybook/react";
import ApigeeApiPlatform from "../ApigeeApiPlatform";

const meta: Meta<typeof ApigeeApiPlatform> = { title: "GCP/ApigeeApiPlatform", component: ApigeeApiPlatform };

export default meta;
type Story = StoryObj<typeof ApigeeApiPlatform>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
