import type { Meta, StoryObj } from "@storybook/react";
import SimpleStorageServiceGlacier from "../SimpleStorageServiceGlacier";

const meta: Meta<typeof SimpleStorageServiceGlacier> = { title: "AWS/Storage/SimpleStorageServiceGlacier", component: SimpleStorageServiceGlacier };

export default meta;
type Story = StoryObj<typeof SimpleStorageServiceGlacier>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
